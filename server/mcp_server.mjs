// server/mcp_server.mjs — 最小 MCP (Model Context Protocol) stdio 服务器
// 零依赖，newline-delimited JSON-RPC 2.0；工具：search_syntax / get_entry / list_dangerous / kb_stats
import readline from 'node:readline';
import * as kb from './kb.mjs';
import * as rag from './rag.mjs';

const SERVER_INFO = { name: 'code-syntax-lookup', version: '0.1.0' };

const TOOL_DEFS = [
  {
    name: 'search_syntax',
    description: '在 PHP/Python/Java 语法与安全知识库中检索。支持函数名精确查找与中文关键词全文检索（如"上传文件"、"命令执行"）。返回函数名、签名、危险标注（sink/source/CWE）与官方手册链接。',
    inputSchema: {
      type: 'object',
      properties: {
        language: { type: 'string', description: '语言', enum: ['php', 'python', 'java', 'js'], default: 'php' },
        query: { type: 'string', description: '函数名或中文/英文关键词' },
        category: { type: 'string', description: '条目类型过滤', enum: ['function', 'syntax', 'security', 'guide'] },
        danger: { type: 'string', description: '危险类型过滤', enum: ['sink', 'source', 'sanitizer', 'validator'] },
        lang: { type: 'string', description: '语料语言，zh 优先返回中文条目', enum: ['zh', 'en', 'all'], default: 'all' },
        limit: { type: 'number', description: '返回条数上限，默认 10' },
      },
      required: ['query'],
    },
  },
  {
    name: 'get_entry',
    description: '按函数名获取知识库条目完整正文（Markdown，含说明/参数/返回值/示例/危险标注）。',
    inputSchema: {
      type: 'object',
      properties: {
        language: { type: 'string', enum: ['php', 'python', 'java', 'js'], default: 'php' },
        name: { type: 'string', description: '函数/类/方法名，如 system、mysqli::query、move_uploaded_file' },
      },
      required: ['name'],
    },
  },
  {
    name: 'list_dangerous',
    description: '列出某语言的危险函数/污点数据清单（sink/source/sanitizer/validator，含 CWE 映射），用于审计时快速核对。',
    inputSchema: {
      type: 'object',
      properties: {
        language: { type: 'string', enum: ['php', 'python', 'java', 'js'], default: 'php' },
        type: { type: 'string', enum: ['sink', 'source', 'sanitizer', 'validator'], description: '按污点类型过滤' },
        cwe: { type: 'string', description: '按 CWE 过滤，如 CWE-78' },
        limit: { type: 'number', default: 50 },
      },
    },
  },
  {
    name: 'ask_audit',
    description: '审计问答（RAG）：基于知识库混合检索（关键词+语义向量）回答审计问题，如"怎么防反序列化"。若本地 Ollama 可用则生成总结回答，否则返回检索结果。',
    inputSchema: {
      type: 'object',
      properties: {
        language: { type: 'string', enum: ['php', 'python', 'java', 'js'], default: 'php' },
        question: { type: 'string', description: '审计问题，中英文皆可' },
      },
      required: ['question'],
    },
  },
  {
    name: 'kb_stats',
    description: '返回知识库统计（条目数、语言/分类/危险类型分布）。',
    inputSchema: { type: 'object', properties: {} },
  },
];

function fmtDanger(d) {
  const parts = [];
  if (d.type) parts.push(d.type.toUpperCase());
  if (d.cwe?.length) parts.push((Array.isArray(d.cwe) ? d.cwe : [d.cwe]).join('/'));
  if (d.attack?.length) parts.push((Array.isArray(d.attack) ? d.attack : [d.attack]).join('/'));
  if (d.params?.length) parts.push('污点参数位: ' + (Array.isArray(d.params) ? d.params : [d.params]).join(','));
  return parts.length ? '【' + parts.join(' | ') + '】' : '';
}

async function handleTool(name, args) {
  switch (name) {
    case 'search_syntax': {
      const rows = await kb.searchSyntax(args);
      if (!rows.length) return '未找到匹配条目。可尝试英文关键词或函数名。';
      const lines = rows.map((r, i) => {
        let s = `${i + 1}. **${r.name}**${r.title ? ' — ' + r.title : ''}${r.lang ? ` [${r.lang}]` : ''}${r.danger_type ? ' ⚠ ' + fmtDanger({ type: r.danger_type, cwe: (r.cwe || '').split(',').filter(Boolean) }) : ''}`;
        if (r.signature) s += `\n   签名: ${r.signature}`;
        s += `\n   来源: ${r.source_url}`;
        if (r.snippet) s += `\n   摘要: ${r.snippet.replace(/\n+/g, ' ').trim()}`;
        return s;
      });
      return `共返回 ${rows.length} 条：\n\n${lines.join('\n\n')}`;
    }
    case 'get_entry': {
      const row = kb.getEntry(args);
      if (!row) return `未找到条目: ${args.name}（语言: ${args.language || 'php'}）`;
      const head = [`# ${row.name}${row.title ? ' — ' + row.title : ''}`];
      if (row.signature) head.push('签名: ' + row.signature);
      if (row.danger?.length) head.push('危险标注: ' + row.danger.map(fmtDanger).join('；'));
      head.push('来源: ' + (row.source_url || ''));
      return head.join('\n') + '\n\n' + (row.content || '');
    }
    case 'list_dangerous': {
      const rows = kb.listDangerous(args);
      if (!rows.length) return '无匹配的危险条目。';
      return rows.map((r) => `- **${r.name}** [${r.danger_type}${r.cwe ? ' | ' + r.cwe : ''}] ${r.title || ''}`).join('\n');
    }
    case 'ask_audit': {
      const r = await rag.askAudit(args);
      return r.text;
    }
    case 'kb_stats': {
      const s = kb.kbStats();
      return JSON.stringify(s, null, 2);
    }
    default:
      throw new Error('未知工具: ' + name);
  }
}

export function startMcp() {
  const rl = readline.createInterface({ input: process.stdin, terminal: false });
  const send = (msg) => process.stdout.write(JSON.stringify(msg) + '\n');

  rl.on('line', async (line) => {
    const trimmed = line.trim();
    if (!trimmed) return;
    let msg;
    try { msg = JSON.parse(trimmed); } catch { return; }
    const { id, method, params } = msg;
    const isNotification = id === undefined || id === null;
    if (isNotification) return; // notifications/initialized 等通知无需应答
    const reply = (result, error) => send({ jsonrpc: '2.0', id, ...(error ? { error } : { result }) });
    try {
      switch (method) {
        case 'initialize':
          reply({
            protocolVersion: params?.protocolVersion || '2025-06-18',
            capabilities: { tools: {} },
            serverInfo: SERVER_INFO,
          });
          break;
        case 'ping':
          reply({});
          break;
        case 'tools/list':
          reply({ tools: TOOL_DEFS });
          break;
        case 'tools/call': {
          const { name, arguments: args } = params || {};
          try {
            const text = await handleTool(name, args || {});
            reply({ content: [{ type: 'text', text: String(text) }], isError: false });
          } catch (e) {
            reply({ content: [{ type: 'text', text: '工具执行失败: ' + e.message }], isError: true });
          }
          break;
        }
        default:
          reply(undefined, { code: -32601, message: 'Method not found: ' + method });
      }
    } catch (e) {
      reply(undefined, { code: -32603, message: 'Internal error: ' + e.message });
    }
  });
}

// 作为独立脚本运行时自动启动（被 app.mjs 打包/导入时不重复启动）
if (process.argv[1] && process.argv[1].endsWith('mcp_server.mjs')) startMcp();
