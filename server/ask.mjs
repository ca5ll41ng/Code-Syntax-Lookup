// server/ask.mjs — RAG 问答 CLI：node server/ask.mjs "问题" [language]
// 需要本地 Ollama 才会生成总结回答，否则降级为知识库检索结果
import { askAudit, retrieveContext } from './rag.mjs';

const question = process.argv[2];
const language = process.argv[3] || 'php';
if (!question) {
  console.error('用法: node server/ask.mjs "问题" [php|python|java]');
  process.exit(1);
}

const result = await askAudit({ language, question });
console.log(result.mode === 'llm' ? '── 模型回答 ──' : '── 检索结果 ──');
console.log(result.text);
if (result.mode !== 'llm' && result.mode !== 'empty') {
  console.log('\n── 上下文详情 ──');
  console.log((await retrieveContext({ language, question, limit: 8 })).join('\n\n'));
}
