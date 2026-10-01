// test/mcp_smoke.mjs — MCP 服务器端到端冒烟测试
import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const proc = spawn(process.execPath, [path.join(ROOT, 'server', 'mcp_server.mjs')], { stdio: ['pipe', 'pipe', 'pipe'] });

let buf = '';
const pending = new Map();
proc.stdout.on('data', (chunk) => {
  buf += chunk;
  let idx;
  while ((idx = buf.indexOf('\n')) >= 0) {
    const line = buf.slice(0, idx); buf = buf.slice(idx + 1);
    if (!line.trim()) continue;
    const msg = JSON.parse(line);
    const resolve = pending.get(msg.id);
    if (resolve) { pending.delete(msg.id); resolve(msg); }
  }
});
proc.stderr.on('data', (d) => process.stderr.write('[server] ' + d));

let nextId = 1;
function rpc(method, params) {
  const id = nextId++;
  return new Promise((resolve) => {
    pending.set(id, resolve);
    proc.stdin.write(JSON.stringify({ jsonrpc: '2.0', id, method, params }) + '\n');
  });
}
const text = (r) => r.result?.content?.map((c) => c.text).join('\n') || JSON.stringify(r);

const results = [];
const check = (name, ok, detail = '') => { results.push({ name, ok, detail }); console.log(`${ok ? 'PASS' : 'FAIL'} ${name}${detail ? ' — ' + detail : ''}`); };

const init = await rpc('initialize', { protocolVersion: '2025-06-18', capabilities: {}, clientInfo: { name: 'smoke', version: '0' } });
check('initialize 握手', init.result?.serverInfo?.name === 'code-syntax-lookup', JSON.stringify(init.result?.serverInfo));
proc.stdin.write(JSON.stringify({ jsonrpc: '2.0', method: 'notifications/initialized' }) + '\n');

const tools = await rpc('tools/list', {});
check('tools/list', tools.result?.tools?.length === 5, tools.result?.tools?.map((t) => t.name).join(','));

const s1 = await rpc('tools/call', { name: 'search_syntax', arguments: { language: 'php', query: '上传文件', limit: 5 } });
const s1First = text(s1).split('\n').filter((l) => l.startsWith('1.'))[0] || '';
check('search_syntax 中文[上传文件] 首条为上传相关函数', /move_uploaded_file|文件上传/.test(s1First), s1First);

const s2 = await rpc('tools/call', { name: 'search_syntax', arguments: { language: 'php', query: 'system', limit: 3 } });
check('search_syntax 函数名[system]', /CWE-78|command_injection/.test(text(s2)), text(s2).split('\n').slice(0, 3).join(' / '));

const g1 = await rpc('tools/call', { name: 'get_entry', arguments: { language: 'php', name: 'move_uploaded_file' } });
check('get_entry [move_uploaded_file]', /move_uploaded_file/.test(text(g1)) && text(g1).length > 500, text(g1).split('\n').slice(0, 2).join(' / '));

const l1 = await rpc('tools/call', { name: 'list_dangerous', arguments: { language: 'php', type: 'sink', cwe: 'CWE-78', limit: 10 } });
check('list_dangerous sink CWE-78', (text(l1).match(/^- /gm) || []).length >= 5, text(l1).split('\n').slice(0, 2).join(' / '));

const st = await rpc('tools/call', { name: 'kb_stats', arguments: {} });
check('kb_stats', /"total":\s*39\d\d\d/.test(text(st)), text(st).replace(/\s+/g, ' ').slice(0, 80));

const s3 = await rpc('tools/call', { name: 'search_syntax', arguments: { language: 'python', query: 'eval', limit: 3 } });
check('search_syntax python[eval] B307', /B307|CWE-78/.test(text(s3)), text(s3).split('\n').filter((l) => l.startsWith('1.'))[0]);

const g2 = await rpc('tools/call', { name: 'get_entry', arguments: { language: 'python', name: 'pickle.loads' } });
check('get_entry python[pickle.loads]', /pickle|loads/i.test(text(g2)) && text(g2).length > 200, text(g2).split('\n')[0]);

const l2 = await rpc('tools/call', { name: 'list_dangerous', arguments: { language: 'python', type: 'sink', limit: 20 } });
check('list_dangerous python sink', (text(l2).match(/^- /gm) || []).length >= 10, text(l2).split('\n').slice(0, 2).join(' / '));

const s4 = await rpc('tools/call', { name: 'search_syntax', arguments: { language: 'java', query: 'Runtime.exec', limit: 3 } });
check('search_syntax java[Runtime.exec] CWE-78', /CWE-78|command/.test(text(s4)), text(s4).split('\n').filter((l) => l.startsWith('1.'))[0]);

const g3 = await rpc('tools/call', { name: 'get_entry', arguments: { language: 'java', name: 'java.sql.Statement.executeQuery' } });
check('get_entry java[Statement.executeQuery]', /executeQuery/i.test(text(g3)) && /CWE-89|sql/i.test(text(g3)), text(g3).split('\n')[0]);

const l3 = await rpc('tools/call', { name: 'list_dangerous', arguments: { language: 'java', cwe: 'CWE-78', limit: 10 } });
check('list_dangerous java CWE-78', (text(l3).match(/^- /gm) || []).length >= 2, text(l3).split('\n').slice(0, 2).join(' / '));

const s5 = await rpc('tools/call', { name: 'search_syntax', arguments: { language: 'php', query: 'deserialization', limit: 8 } });
check('search_syntax 命中 OWASP multi 条目', /Abuse|Deserialization|Cheat/i.test(text(s5)) || /Deserialization/i.test(text(s5)), text(s5).split('\n').filter((l) => l.startsWith('1.') || l.startsWith('2.'))[0]);

const a1 = await rpc('tools/call', { name: 'ask_audit', arguments: { language: 'python', question: 'pickle 反序列化怎么防' } });
check('ask_audit 降级为检索结果', /pickle|反序列化|检索/i.test(text(a1)) && !a1.result?.isError, text(a1).split('\n').slice(0, 2).join(' / '));

proc.kill();
const failed = results.filter((r) => !r.ok);
console.log(`\n${failed.length ? '存在失败用例' : '全部通过'}: ${results.length - failed.length}/${results.length}`);
process.exit(failed.length ? 1 : 0);
