// pipeline/llmstxt.mjs — 从语料导出 llms.txt（目录索引）与 llms-full.txt（全量），llmstxt.org v2 格式
// 附带生成 MCP 配置片段，方便 AI 客户端接入
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CORPUS = path.join(ROOT, 'corpus');

function walkMd(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walkMd(p));
    else if (e.name.endsWith('.md') && e.name !== 'llms.txt' && e.name !== 'llms-full.txt') out.push(p);
  }
  return out;
}

function buildForLanguage(lang, dir) {
  const files = walkMd(dir);
  const entries = [];
  for (const f of files) {
    const text = fs.readFileSync(f, 'utf8');
    const m = text.match(/^---\n([\s\S]*?)\n---\n/);
    if (!m) continue;
    const fm = {};
    for (const line of m[1].split('\n')) {
      const km = line.match(/^([A-Za-z_]+):\s*(.*)$/);
      if (!km) continue;
      try { fm[km[1]] = JSON.parse(km[2]); } catch { fm[km[1]] = km[2]; }
    }
    entries.push({ fm, rel: path.relative(dir, f).split(path.sep).join('/'), body: text.slice(m[0].length) });
  }
  entries.sort((a, b) => (a.fm.category || '').localeCompare(b.fm.category || '') || (a.fm.name || '').localeCompare(b.fm.name || ''));

  const catTitle = { function: 'Functions & Methods (函数/方法参考)', syntax: 'Language Syntax (语言参考)', security: 'Security (安全章节)', guide: 'Guides (使用指南)' };
  let idx = `# Code-Syntax-Lookup — PHP\n\n> PHP 语法与安全知识库（中文优先，英文回退）。共 ${entries.length} 条。\n> 语料: php/doc-en & php/doc-zh (CC BY 3.0)；危险标注: designsecurity/progpilot (MIT)。\n> 每条含 frontmatter（name/signature/danger/CWE/source_url）。\n\n`;
  let full = idx;
  let lastCat = '';
  for (const { fm, rel, body } of entries) {
    if (fm.category !== lastCat) {
      lastCat = fm.category || 'other';
      const t = catTitle[lastCat] || lastCat;
      idx += `\n## ${t}\n\n`;
      full += `\n## ${t}\n\n`;
    }
    const danger = fm.danger ? ` ⚠${JSON.stringify(fm.danger)}` : '';
    idx += `- [${fm.name}${fm.title ? ' — ' + fm.title : ''}](${rel}): ${fm.signature || ''}${danger}\n`;
    full += body.trim() + '\n\n---\n\n';
  }
  fs.writeFileSync(path.join(dir, 'llms.txt'), idx, 'utf8');
  fs.writeFileSync(path.join(dir, 'llms-full.txt'), full, 'utf8');
  console.log(`${lang}: llms.txt (${entries.length} 条, ${(fs.statSync(path.join(dir, 'llms.txt')).size / 1024).toFixed(0)} KB), llms-full.txt (${(fs.statSync(path.join(dir, 'llms-full.txt')).size / 1024 / 1024).toFixed(1)} MB)`);
}

if (fs.existsSync(path.join(CORPUS, 'php'))) buildForLanguage('php', path.join(CORPUS, 'php'));

// 根 llms.txt
const langs = fs.existsSync(CORPUS) ? fs.readdirSync(CORPUS).filter((d) => fs.statSync(path.join(CORPUS, d)).isDirectory()) : [];
let root = `# Code-Syntax-Lookup\n\n> 白盒审计用多语言语法/安全知识库。人用搜索站点，AI 用本文件与 MCP 工具。\n\n## 语言知识库\n\n`;
for (const l of langs) {
  const p = path.join(CORPUS, l, 'llms.txt');
  if (fs.existsSync(p)) root += `- [${l.toUpperCase()} 知识库索引](corpus/${l}/llms.txt): 函数/语法/安全条目目录，正文见同目录 llms-full.txt\n`;
}
fs.writeFileSync(path.join(ROOT, 'llms.txt'), root, 'utf8');
console.log('根 llms.txt 已生成');
