// server/rag.mjs — RAG 核心：混合检索 → 上下文组装 → Ollama 生成（可选，未配置时降级为纯检索）
import * as kb from './kb.mjs';

const OLLAMA_URL = process.env.OLLAMA_URL || 'http://127.0.0.1:11434';
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || 'qwen2.5:7b';

export function fmtDanger(d) {
  const parts = [];
  if (d.type) parts.push(d.type.toUpperCase());
  if (d.cwe?.length) parts.push((Array.isArray(d.cwe) ? d.cwe : [d.cwe]).join('/'));
  if (d.attack?.length) parts.push((Array.isArray(d.attack) ? d.attack : [d.attack]).join('/'));
  if (d.params?.length) parts.push('污点参数位: ' + (Array.isArray(d.params) ? d.params : [d.params]).join(','));
  return parts.length ? '【' + parts.join(' | ') + '】' : '';
}

export async function retrieveContext({ language = 'php', question, limit = 8 }) {
  const hits = await kb.searchSyntax({ language, query: question, limit });
  return hits.map((r, i) => {
    const danger = r.danger_type ? ` ⚠ ${fmtDanger({ type: r.danger_type, cwe: (r.cwe || '').split(',').filter(Boolean) })}` : '';
    const snippet = (r.snippet || r.title || '').replace(/\n+/g, ' ').trim().slice(0, 300);
    return `${i + 1}. [${r.name}]${danger} ${r.title || ''} (${r.lang})\n   来源: ${r.source_url}\n   ${snippet}`;
  });
}

async function ollamaChat(messages) {
  const res = await fetch(`${OLLAMA_URL}/api/chat`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ model: OLLAMA_MODEL, messages, stream: false }),
    signal: AbortSignal.timeout(120_000),
  });
  if (!res.ok) throw new Error(`Ollama HTTP ${res.status}`);
  const json = await res.json();
  return json.message?.content || '';
}

export async function askAudit({ language = 'php', question }) {
  const context = await retrieveContext({ language, question, limit: 8 });
  if (!context.length) return { mode: 'empty', text: '知识库中未检索到相关条目。' };

  const systemPrompt = [
    '你是白盒代码审计助手。基于提供的知识库资料回答问题，规则：',
    '1. 只使用资料中的事实，不要编造；2. 回答用中文；3. 提到危险函数时说明 CWE 与污点参数位；',
    '4. 每个结论末尾附上来源编号（如 [1]）；5. 资料不足时明确说明。',
  ].join('\n');
  const userPrompt = `知识库资料：\n\n${context.join('\n\n')}\n\n问题：${question}`;

  let answer, mode;
  try {
    answer = await ollamaChat([
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ]);
    mode = 'llm';
  } catch (e) {
    mode = 'retrieval-only';
    answer = `（未连接本地模型 ${OLLAMA_MODEL}，以下为知识库检索结果。启动 Ollama 并设置 OLLAMA_URL/OLLAMA_MODEL 后可获得总结回答。）\n\n` +
      context.join('\n\n');
  }
  return { mode, text: answer };
}
