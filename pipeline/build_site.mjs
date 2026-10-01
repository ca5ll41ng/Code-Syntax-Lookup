// pipeline/build_site.mjs — 轻量静态站点生成器
// corpus/**/*.md → docs-site/dist/**/*.html（零框架，秒级构建），搜索由 Pagefind 索引 dist 提供
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import MarkdownIt from 'markdown-it';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CORPUS = path.join(ROOT, 'corpus');
const DIST = path.join(ROOT, 'docs-site', 'dist');

const md = new MarkdownIt({ html: false, linkify: false });

function esc(s) {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function parseFrontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) return { fm: {}, body: text };
  const fm = {};
  for (const line of m[1].split('\n')) {
    const km = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (!km) continue;
    try { fm[km[1]] = JSON.parse(km[2]); } catch { fm[km[1]] = km[2]; }
  }
  return { fm, body: text.slice(m[0].length) };
}

function dangerBadges(fm) {
  const dangers = fm.danger ? (Array.isArray(fm.danger) ? fm.danger : [fm.danger]) : [];
  if (!dangers.length) return '';
  return dangers
    .map((d) => {
      const bits = [d.type?.toUpperCase(), ...(d.cwe || []), ...(d.attack || [])];
      if (d.params?.length) bits.push('污点参数位 ' + d.params.join(','));
      return `<span class="badge danger">⚠ ${esc(bits.join(' · '))}</span>`;
    })
    .join(' ');
}

const SHELL = (title, body, extraHead = '') => `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)} · Code-Syntax-Lookup</title>
<link rel="stylesheet" href="/style.css">
${extraHead}
</head>
<body>
<header class="topbar">
  <a class="brand" href="/">Code-Syntax-Lookup</a>
  <nav><a href="/">首页</a> · <a href="/search.html">搜索</a> · <a href="/mcp.html">MCP</a></nav>
</header>
<main>
${body}
</main>
</body>
</html>`;

function walkMd(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walkMd(p));
    else if (e.name.endsWith('.md')) out.push(p);
  }
  return out;
}

// ---------- 生成 ----------
fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST, { recursive: true });

const pagesByDir = new Map(); // dir(相对) → [{href, label}]
for (const lang of fs.existsSync(CORPUS) ? fs.readdirSync(CORPUS).filter((d) => fs.statSync(path.join(CORPUS, d)).isDirectory()) : []) {
  const langDir = path.join(CORPUS, lang);
  for (const f of walkMd(langDir)) {
    if (f.endsWith('llms-full.txt')) continue;
    const rel = path.relative(langDir, f).replace(/\.md$/, '');
    const text = fs.readFileSync(f, 'utf8');
    const { fm, body } = parseFrontmatter(text);
    const html = SHELL(
      `${fm.name || fm.title || rel} [${lang}]`,
      `<div class="meta">
        <span class="badge">${esc(fm.language || '')}</span>
        <span class="badge">${esc(fm.category || '')}</span>
        <span class="badge">${esc(fm.lang || lang)}</span>
        ${dangerBadges(fm)}
        ${fm.source_url ? `<a class="official" href="${esc(fm.source_url)}">官方手册 ↗</a>` : ''}
      </div>
      ${fm.signature ? `<pre class="signature">${esc(fm.signature)}</pre>` : ''}
      ${md.render(body)}`,
    );
    const outPath = path.join(DIST, 'corpus', lang, rel + '.html');
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, html);

    const dirKey = path.dirname(path.join('corpus', lang, rel)).replace(/\\/g, '/');
    if (!pagesByDir.has(dirKey)) pagesByDir.set(dirKey, []);
    pagesByDir.get(dirKey).push({ href: '/' + path.join('corpus', lang, rel + '.html').replace(/\\/g, '/'), label: `${fm.name || rel}${fm.title ? ' — ' + fm.title : ''}` });
  }
}

// 目录索引页
for (const [dirKey, items] of pagesByDir) {
  const ul = items
    .sort((a, b) => a.label.localeCompare(b.label))
    .map((it) => `<li><a href="${it.href}">${esc(it.label)}</a></li>`)
    .join('\n');
  fs.mkdirSync(path.join(DIST, dirKey), { recursive: true });
  fs.writeFileSync(path.join(DIST, dirKey, 'index.html'), SHELL(dirKey, `<h1>${esc(dirKey)}</h1><p>${items.length} 条</p><ul class="dirlist">\n${ul}\n</ul>`));
}

// 顶层目录索引（语言层）
for (const lang of fs.existsSync(CORPUS) ? fs.readdirSync(CORPUS).filter((d) => fs.statSync(path.join(CORPUS, d)).isDirectory()) : []) {
  const subs = [...pagesByDir.keys()].filter((k) => k === `corpus/${lang}` || k.startsWith(`corpus/${lang}/`)).map((k) => ({ href: '/' + k + '/', label: k.replace(`corpus/${lang}`, lang) }));
  const top = { href: `/corpus/${lang}/`, label: `${lang}（${pagesByDir.get(`corpus/${lang}`)?.length || 0} 条直系条目）` };
  const lis = [top, ...subs.filter((s) => s.href !== top.href)].map((s) => `<li><a href="${s.href}">${esc(s.label)}</a></li>`).join('\n');
  fs.writeFileSync(path.join(DIST, 'corpus', lang, 'index.html'), SHELL(lang, `<h1>${esc(lang)} 知识库</h1><ul class="dirlist">\n${lis}\n</ul>`));
}

// llms.txt 同步进站点
for (const lang of fs.existsSync(CORPUS) ? fs.readdirSync(CORPUS).filter((d) => fs.statSync(path.join(CORPUS, d)).isDirectory()) : []) {
  for (const f of ['llms.txt', 'llms-full.txt']) {
    const s = path.join(CORPUS, lang, f);
    if (fs.existsSync(s)) fs.copyFileSync(s, path.join(DIST, 'corpus', lang, f));
  }
}

// 首页
fs.writeFileSync(
  path.join(DIST, 'index.html'),
  SHELL('首页', `<h1>白盒审计语法知识库</h1>
<p>人可搜索 · AI 可读取 · 中文优先。当前覆盖 PHP（Python / Java 按方案 M2/M3 接入）。</p>
<ul>
<li><a href="/search.html">全文搜索</a>（支持中文分词、函数名、危险函数过滤提示）</li>
<li><a href="/corpus/php/">浏览 PHP 语料目录</a></li>
<li><a href="/mcp.html">MCP 接入说明</a></li>
<li><a href="/corpus/php/llms.txt">llms.txt 索引</a> / <a href="/corpus/php/llms-full.txt">llms-full.txt 全量</a></li>
</ul>`),
);

// 搜索页
fs.writeFileSync(
  path.join(DIST, 'search.html'),
  SHELL('搜索', `<h1>搜索</h1><div id="search"></div>
<script src="/pagefind/pagefind-ui.js"></script>
<link rel="stylesheet" href="/pagefind/pagefind-ui.css">
<script>
  window.addEventListener('DOMContentLoaded', function () {
    if (window.PagefindUI) new PagefindUI({ element: '#search', pageSize: 15, showImages: false,
      translations: { placeholder: '搜索函数 / 语法 / 危险函数…' } });
  });
</script>`),
);

// MCP 说明页（渲染 docs-site/docs/mcp.md）
const mcpMd = path.join(ROOT, 'docs-site', 'docs', 'mcp.md');
if (fs.existsSync(mcpMd)) {
  const text = fs.readFileSync(mcpMd, 'utf8');
  const { body } = parseFrontmatter(text);
  fs.writeFileSync(path.join(DIST, 'mcp.html'), SHELL('MCP 接入', md.render(body)));
}

// 样式
fs.writeFileSync(
  path.join(DIST, 'style.css'),
  `:root{color-scheme:light dark;--fg:#213547;--bg:#fff;--muted:#6b7280;--bd:#e2e8f0;--danger:#b91c1c;--brand:#2563eb}
@media (prefers-color-scheme:dark){:root{--fg:#dbe2ea;--bg:#0f172a;--muted:#94a3b8;--bd:#1e293b}}
*{box-sizing:border-box}body{margin:0;font:15px/1.65 -apple-system,'Segoe UI','Microsoft YaHei',sans-serif;color:var(--fg);background:var(--bg)}
.topbar{display:flex;justify-content:space-between;align-items:center;padding:.7rem 1.2rem;border-bottom:1px solid var(--bd)}
.brand{font-weight:700;color:var(--brand);text-decoration:none}nav a{color:var(--fg)}
main{max-width:60rem;margin:0 auto;padding:1.2rem}
.meta{margin:.4rem 0 1rem}.badge{display:inline-block;background:var(--bd);border-radius:6px;padding:.1rem .5rem;font-size:12px;margin-right:.4rem}
.badge.danger{background:#fee2e2;color:var(--danger);font-weight:600}
@media (prefers-color-scheme:dark){.badge.danger{background:#450a0a}}
.signature{background:var(--bd);padding:.7rem .9rem;border-radius:8px;overflow:auto}
pre{overflow:auto}code{font-family:Consolas,'Cascadia Code',monospace;font-size:.92em}
pre code{display:block;padding:.8rem 1rem}
.dirlist{columns:2;gap:2rem}li{break-inside:avoid}a{color:var(--brand);text-decoration:none}a:hover{text-decoration:underline}
.official{font-size:13px}th,td{border:1px solid var(--bd);padding:.3rem .6rem}table{border-collapse:collapse}
blockquote{border-left:3px solid var(--bd);margin:0;padding:.2rem 1rem;color:var(--muted)}`,
);

const pageCount = [...pagesByDir.values()].reduce((a, b) => a + b.length, 0);
console.log(`站点生成完成: ${pageCount} 个条目页 → ${DIST}`);
