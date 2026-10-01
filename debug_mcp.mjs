// debug_mcp.mjs — 复现 smoke 测试的服务器调用
import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const proc = spawn(process.execPath, [path.join(ROOT, 'server', 'mcp_server.mjs')], { stdio: ['pipe', 'pipe', 'pipe'] });
let buf = '';
proc.stdout.on('data', (c) => { buf += c; });
proc.stderr.on('data', (c) => process.stderr.write('[srv] ' + c));

let id = 1;
const rpc = (method, params) => new Promise((resolve) => {
  const myId = id++;
  const startLen = buf.length;
  proc.stdin.write(JSON.stringify({ jsonrpc: '2.0', id: myId, method, params }) + '\n');
  const check = () => {
    const nl = buf.indexOf('\n', startLen);
    if (nl >= 0) {
      const line = buf.slice(buf.lastIndexOf('\n', nl - 1) + 1, nl);
      try { const msg = JSON.parse(line); if (msg.id === myId) return resolve(msg); } catch {}
    }
    setTimeout(check, 100);
  };
  setTimeout(check, 200);
});

const r1 = await rpc('initialize', { protocolVersion: '2025-06-18', capabilities: {}, clientInfo: { name: 'dbg', version: '0' } });
console.log('init ok:', !!r1.result);
proc.stdin.write(JSON.stringify({ jsonrpc: '2.0', method: 'notifications/initialized' }) + '\n');
const r2 = await rpc('tools/call', { name: 'search_syntax', arguments: { language: 'php', query: 'system', limit: 3 } });
console.log('search 结果:', JSON.stringify(r2).slice(0, 500));
proc.kill();
process.exit(0);
