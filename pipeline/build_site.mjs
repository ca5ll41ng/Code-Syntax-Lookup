// pipeline/build_site.mjs — 站点生成器
// 首页 = 语言入口（无搜索框）；每个语言有专属搜索页（锁定语言）；官方手册整站拉取进 /manual/
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import MarkdownIt from 'markdown-it';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CORPUS = path.join(ROOT, 'corpus');
const DIST = path.join(ROOT, 'docs-site', 'dist');
const SITE_ASSETS = path.join(ROOT, 'docs-site', 'assets');
const MANUALS_RAW = path.join(ROOT, 'raw', 'manuals');

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

const HL_HEAD = (hasCode) => (hasCode
  ? `<link rel="stylesheet" href="/assets/vendor/github.min.css" media="(prefers-color-scheme: light)">
<link rel="stylesheet" href="/assets/vendor/github-dark.min.css" media="(prefers-color-scheme: dark)">
<script src="/assets/vendor/highlight.min.js"></script>
<script>window.addEventListener('DOMContentLoaded',function(){if(window.hljs)document.querySelectorAll('pre code').forEach(function(el){hljs.highlightElement(el)})})</script>`
  : '');

const NAV = `<header class="topbar">
  <span class="navbtns">
    <button class="navbtn" onclick="history.back()" title="后退 (Alt+←)">←</button>
    <button class="navbtn" onclick="history.forward()" title="前进 (Alt+→)">→</button>
  </span>
  <a class="brand" href="/">⌘ CodeSyntaxLookup</a>
  <nav>
    <a href="/">首页</a> · <a href="/search-php.html">PHP</a> · <a href="/search-python.html">Python</a> · <a href="/search-java.html">Java</a> · <a href="/mcp.html">MCP</a>
  </nav>
</header>`;

const SHELL = (title, body, opts = {}) => `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)} · CodeSyntaxLookup</title>
<link rel="stylesheet" href="/style.css">
${HL_HEAD(opts.hasCode ?? body.includes('<pre'))}
</head>
<body>
${NAV}
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

// ---------- 语料详情页 ----------
fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST, { recursive: true });
if (fs.existsSync(path.join(SITE_ASSETS, 'vendor'))) fs.cpSync(SITE_ASSETS, path.join(DIST, 'assets'), { recursive: true });

const pagesByDir = new Map();
const dangerByLang = new Map();

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
      { hasCode: true },
    );
    const outPath = path.join(DIST, 'corpus', lang, rel + '.html');
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, html);

    const dirKey = path.dirname(path.join('corpus', lang, rel)).replace(/\\/g, '/');
    if (!pagesByDir.has(dirKey)) pagesByDir.set(dirKey, []);
    pagesByDir.get(dirKey).push({ href: '/' + path.join('corpus', lang, rel + '.html').replace(/\\/g, '/'), label: `${fm.name || rel}${fm.title ? ' — ' + fm.title : ''}` });

    if (fm.danger) {
      if (!dangerByLang.has(lang)) dangerByLang.set(lang, []);
      dangerByLang.get(lang).push({ name: fm.name, title: fm.title, danger: fm.danger, href: '/' + path.join('corpus', lang, rel + '.html').replace(/\\/g, '/') });
    }
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

// 语言层索引 + 危险函数专页
for (const lang of fs.existsSync(CORPUS) ? fs.readdirSync(CORPUS).filter((d) => fs.statSync(path.join(CORPUS, d)).isDirectory()) : []) {
  const count = (pagesByDir.get(`corpus/${lang}`) || []).length;
  const dangerHref = dangerByLang.has(lang) ? `<li><a href="/corpus/${lang}/danger.html">⚠ 危险函数专页</a></li>` : '';
  const subs = [...pagesByDir.keys()].filter((k) => k.startsWith(`corpus/${lang}/`)).map((k) => ({ href: '/' + k + '/', label: k.replace(`corpus/${lang}`, lang) }));
  const lis = [`<li><a href="/corpus/${lang}/">${lang}（${count} 条直系条目）</a></li>`, dangerHref, ...subs.map((s) => `<li><a href="${s.href}">${esc(s.label)}</a></li>`)].filter(Boolean).join('\n');
  fs.writeFileSync(path.join(DIST, 'corpus', lang, 'index.html'), SHELL(lang, `<h1>${esc(lang)} 语料</h1><ul class="dirlist">\n${lis}\n</ul>`));

  if (dangerByLang.has(lang)) {
    const rows = dangerByLang.get(lang)
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((it) => `<li><a href="${it.href}">${esc(it.name)}</a> ${dangerBadges(it)}</li>`)
      .join('\n');
    fs.writeFileSync(path.join(DIST, 'corpus', lang, 'danger.html'), SHELL(`${lang} 危险函数`, `<h1>⚠ ${esc(lang)} 危险函数（${dangerByLang.get(lang).length}）</h1><p>来源：progpilot / bandit / FindSecBugs 污点数据。</p><ul class="dirlist">\n${rows}\n</ul>`));
  }
}

// llms.txt 同步
for (const lang of fs.existsSync(CORPUS) ? fs.readdirSync(CORPUS).filter((d) => fs.statSync(path.join(CORPUS, d)).isDirectory()) : []) {
  for (const f of ['llms.txt', 'llms-full.txt']) {
    const s = path.join(CORPUS, lang, f);
    if (fs.existsSync(s)) fs.copyFileSync(s, path.join(DIST, 'corpus', lang, f));
  }
}

// ---------- 官方手册整站接入 ----------
const MANUAL_TARGET = path.join(DIST, 'manual');
fs.mkdirSync(MANUAL_TARGET, { recursive: true });
const manualCards = [];

const phpTgz = path.join(MANUALS_RAW, 'php_manual_zh.tar.gz');
if (fs.existsSync(phpTgz)) {
  const dest = path.join(MANUAL_TARGET, 'php');
  fs.mkdirSync(dest, { recursive: true });
  try {
    execSync(`tar -xzf php_manual_zh.tar.gz -C "${dest}"`, { cwd: MANUALS_RAW, stdio: 'pipe' });
    const inner = fs.readdirSync(dest).find((d) => d === 'php-chunked-xhtml');
    if (inner) {
      const innerDir = path.join(dest, inner);
      for (const e of fs.readdirSync(innerDir)) fs.renameSync(path.join(innerDir, e), path.join(dest, e));
      fs.rmSync(innerDir, { recursive: true, force: true });
    }
    manualCards.push({ href: '/manual/php/', title: 'PHP 官方手册', desc: '简体中文 · php.net 官方离线整包', badge: '官方中文' });
    console.log('PHP 中文手册已解压');
  } catch (e) { console.error('PHP 手册解压失败:', e.message); }
}

const pyZip = path.join(MANUALS_RAW, 'python-docs-html-zh.zip');
if (fs.existsSync(pyZip)) {
  const dest = path.join(MANUAL_TARGET, 'python');
  fs.mkdirSync(dest, { recursive: true });
  try {
    execSync(`powershell -NoProfile -Command "Expand-Archive -LiteralPath '${pyZip}' -DestinationPath '${dest}' -Force"`, { stdio: 'pipe' });
    const inner = fs.readdirSync(dest).find((d) => d.startsWith('python-'));
    if (inner && fs.statSync(path.join(dest, inner)).isDirectory()) {
      const innerDir = path.join(dest, inner);
      for (const e of fs.readdirSync(innerDir)) fs.renameSync(path.join(innerDir, e), path.join(dest, e));
      fs.rmSync(path.join(dest, inner), { recursive: true, force: true });
    }
    manualCards.push({ href: '/manual/python/', title: 'Python 官方文档', desc: '简体中文 · docs.python.org 官方离线整包（含官方搜索）', badge: '官方中文' });
    console.log('Python 中文文档已解压');
  } catch (e) { console.error('Python 文档解压失败:', e.message); }
}

manualCards.push({ href: 'https://docs.oracle.com/en/java/javase/21/docs/api/index.html', title: 'Java API（在线）', desc: 'Oracle 官方 Javadoc；离线内容用各语言搜索页（英文）', badge: '在线', external: true });

const manualCardHtml = manualCards
  .map((c) => `<a class="card" href="${c.href}"${c.external ? ' target="_blank" rel="noreferrer"' : ''}>
    <div class="card-title">${esc(c.title)} <span class="badge">${esc(c.badge)}</span></div>
    <div class="card-desc">${esc(c.desc)}</div>
  </a>`)
  .join('\n');

// ---------- 各语言专属搜索页（锁定语言） ----------
const SEARCH_JS = `
(function () {
  var onlyDanger = false, timer = null;
  var q = document.getElementById('q'), od = document.getElementById('onlydanger'), out = document.getElementById('results');
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function render(rows) {
    if (!rows.length) { out.innerHTML = '<p class="empty">没有匹配结果，换个关键词试试。</p>'; return; }
    out.innerHTML = rows.map(function (r) {
      var d = '';
      if (r.danger_type) d = '<span class="badge danger">⚠ ' + esc(r.danger_type.toUpperCase()) + (r.cwe ? ' · ' + esc(r.cwe) : '') + '</span>';
      return '<article class="hit">'
        + '<div class="hit-head"><a class="hit-name" href="' + esc(r.source_url) + '" target="_blank" rel="noreferrer">' + esc(r.name) + '</a>'
        + '<span class="badge">' + esc(r.lang) + '</span>' + d + '</div>'
        + (r.signature ? '<pre class="hit-sig">' + esc(r.signature) + '</pre>' : '')
        + (r.title ? '<div class="hit-title">' + esc(r.title) + '</div>' : '')
        + '</article>';
    }).join('\\n');
  }
  function doSearch() {
    var v = q.value.trim();
    if (!v) { out.innerHTML = ''; return; }
    fetch('/api/search?limit=20&lang=LANG&q=' + encodeURIComponent(v) + (onlyDanger ? '&danger=sink' : ''))
      .then(function (r) { return r.json(); })
      .then(function (j) { render(j.results || []); })
      .catch(function () { out.innerHTML = '<p class="empty">搜索失败</p>'; });
  }
  q.addEventListener('input', function () { clearTimeout(timer); timer = setTimeout(doSearch, 250); });
  q.addEventListener('keydown', function (e) { if (e.key === 'Enter') { clearTimeout(timer); doSearch(); } });
  od.addEventListener('change', function () { onlyDanger = od.checked; doSearch(); });
  q.focus();
})();
`;

function searchPage(lang, label, extras) {
  const body = `
<section class="hero">
  <h1>${esc(label)} 搜索</h1>
  <p class="sub">函数名 / 关键词均可，支持模糊匹配${lang === 'java' ? '（Java 语料为英文）' : ''}</p>
  <div class="searchbar">
    <input id="q" type="search" placeholder="搜索 ${esc(label)} 函数、语法、危险用法…" autofocus>
  </div>
  <label class="onlydanger"><input type="checkbox" id="onlydanger"> 仅看危险函数（sink）</label>
</section>
<section id="results" class="results"></section>
<section class="links">
${extras}
</section>`;
  return SHELL(`${label} 搜索`, body, { hasCode: false }).replace(
    '/*SEARCH_JS*/',
    `<script>${SEARCH_JS.replace(/LANG/g, lang)}</script>`,
  );
}

const LANG_META = {
  php: { label: 'PHP', extras: '  <a href="/corpus/php/danger.html">⚠ 危险函数专页</a> · <a href="/corpus/php/">语料目录</a> · <a href="/manual/php/">官方中文手册</a>' },
  python: { label: 'Python', extras: '  <a href="/corpus/python/danger.html">⚠ 危险函数专页</a> · <a href="/corpus/python/">语料目录</a> · <a href="/manual/python/">官方中文文档</a>' },
  java: { label: 'Java', extras: '  <a href="/corpus/java/danger.html">⚠ 危险函数专页</a> · <a href="/corpus/java/">语料目录</a> · <a href="https://docs.oracle.com/en/java/javase/21/docs/api/index.html" target="_blank" rel="noreferrer">Oracle API（在线）</a>' },
};

for (const [lang, meta] of Object.entries(LANG_META)) {
  fs.writeFileSync(path.join(DIST, `search-${lang}.html`), searchPage(lang, meta.label, meta.extras).replace('/*SEARCH_JS*/', `<script>${SEARCH_JS.replace(/LANG/g, lang)}</script>`));
}
// 全语言搜索页（导航可达，供跨语言查询）
fs.writeFileSync(path.join(DIST, 'search.html'), searchPage('all', '全部语言', '  <a href="/mcp.html">MCP 接入</a> · <a href="/llms.txt">llms.txt</a>').replace('/*SEARCH_JS*/', `<script>${SEARCH_JS.replace(/LANG/g, 'all')}</script>`));

// ---------- 首页（语言入口，无搜索框） ----------
const langCards = [
  { href: '/manual/php/', title: 'PHP 官方手册', desc: '简体中文 · php.net 官方离线整站', badge: '点击进入' },
  { href: '/manual/python/', title: 'Python 官方文档', desc: '简体中文 · docs.python.org 官方离线整站', badge: '点击进入' },
  { href: 'https://docs.oracle.com/en/java/javase/21/docs/api/index.html', title: 'Java API', desc: 'Oracle 官方 Javadoc（在线，无官方中文离线包）', badge: '在线', external: true },
];
const homeCards = langCards
  .map((c) => `<a class="card big" href="${c.href}"${c.external ? ' target="_blank" rel="noreferrer"' : ''}>
    <div class="card-title">${esc(c.title)} <span class="badge">${esc(c.badge)}</span></div>
    <div class="card-desc">${esc(c.desc)}</div>
  </a>`)
  .join('\n');

const dangerLinks = ['php', 'python', 'java']
  .filter((l) => dangerByLang.has(l))
  .map((l) => `<a href="/corpus/${l}/danger.html">⚠ ${esc(l)} 危险函数</a>`)
  .join(' · ');

const HOME_BODY = `
<section class="cards langs home">
${homeCards}
</section>`;
fs.writeFileSync(path.join(DIST, 'index.html'), SHELL('首页', HOME_BODY, { hasCode: false }));

// MCP 说明页
const mcpMd = path.join(ROOT, 'docs-site', 'docs', 'mcp.md');
if (fs.existsSync(mcpMd)) {
  const text = fs.readFileSync(mcpMd, 'utf8');
  const { body } = parseFrontmatter(text);
  fs.writeFileSync(path.join(DIST, 'mcp.html'), SHELL('MCP 接入', md.render(body), { hasCode: true }));
}

// 样式
fs.writeFileSync(
  path.join(DIST, 'style.css'),
  `:root{color-scheme:light dark;--fg:#1a2233;--bg:#f6f7fb;--card:#fff;--muted:#64748b;--bd:#e2e8f0;--danger:#b91c1c;--brand:#4f46e5;--brand2:#7c3aed;--code-bg:#0f172a}
@media (prefers-color-scheme:dark){:root{--fg:#d7dee8;--bg:#0b1020;--card:#111a2e;--muted:#8fa0b5;--bd:#1e2a44;--brand:#818cf8;--brand2:#a78bfa;--code-bg:#05080f}}
*{box-sizing:border-box}body{margin:0;font:15px/1.7 -apple-system,'Segoe UI','Microsoft YaHei',sans-serif;color:var(--fg);background:var(--bg)}
.topbar{display:flex;justify-content:space-between;align-items:center;padding:.65rem 1.3rem;background:var(--card);border-bottom:1px solid var(--bd);position:sticky;top:0;z-index:9}
.brand{font-weight:800;color:var(--brand);text-decoration:none;font-size:15px}nav{font-size:13.5px}nav a{color:var(--muted);text-decoration:none}nav a:hover{color:var(--brand)}
.navbtns{display:flex;gap:.3rem}.navbtn{width:30px;height:30px;border-radius:8px;border:1px solid var(--bd);background:var(--card);color:var(--fg);cursor:pointer;font-size:15px;line-height:1}.navbtn:hover{border-color:var(--brand)}
main{max-width:56rem;margin:0 auto;padding:1.5rem 1.2rem 3rem}
.hero{text-align:center;padding:1.2rem 0 .4rem}
.hero h1{margin:.2rem 0;font-size:26px}.sub{color:var(--muted);font-size:13.5px;margin:.2rem 0 1rem}
.searchbar input{width:100%;padding:.85rem 1.1rem;font-size:16px;border-radius:12px;border:1.5px solid var(--bd);background:var(--card);color:var(--fg);outline:none;transition:border .15s}
.searchbar input:focus{border-color:var(--brand);box-shadow:0 0 0 3px rgba(79,70,229,.15)}
.onlydanger{display:block;font-size:13px;color:var(--muted);margin:.3rem 0 0}
.results{margin-top:1.2rem}
.hit{background:var(--card);border:1px solid var(--bd);border-radius:12px;padding:.85rem 1.05rem;margin:.65rem 0;cursor:pointer;transition:border .12s}
.hit:hover{border-color:var(--brand)}
.hit-head{display:flex;align-items:center;gap:.5rem;flex-wrap:wrap}
.hit-name{font-family:Consolas,monospace;font-weight:700;font-size:15px;color:var(--fg);text-decoration:none}
.hit-name:hover{color:var(--brand)}
.badge{display:inline-block;background:var(--bd);border-radius:6px;padding:.08rem .5rem;font-size:11.5px;color:var(--muted)}
.badge.danger{background:#fee2e2;color:var(--danger);font-weight:700}
@media (prefers-color-scheme:dark){.badge.danger{background:#3b0d0d;color:#fca5a5}}
.hit-sig,.signature{background:var(--code-bg);color:#e2e8f0;padding:.55rem .8rem;border-radius:8px;overflow:auto;font-size:12.5px;margin:.5rem 0 .2rem}
.hit-title{color:var(--muted);font-size:13.5px;margin-top:.35rem}
.manuals h2,.links{margin-top:2rem}
.cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:.8rem}
.card{display:block;background:var(--card);border:1px solid var(--bd);border-radius:12px;padding:.9rem 1rem;text-decoration:none;color:var(--fg);transition:border .12s,transform .12s}
.card:hover{border-color:var(--brand);transform:translateY(-2px)}
.card.big{padding:1.6rem 1.4rem;text-align:center}.card.big .card-title{font-size:22px}.home{max-width:44rem;margin:0 auto;min-height:40vh;display:flex;flex-direction:column;justify-content:center}
.card-title{font-weight:700}.card-desc{color:var(--muted);font-size:13px;margin-top:.25rem}
.links{font-size:13.5px}
.empty{color:var(--muted);text-align:center;padding:2rem}
.dirlist{columns:2;gap:2rem}li{break-inside:avoid}a{color:var(--brand);text-decoration:none}a:hover{text-decoration:underline}
.official{font-size:12.5px;margin-left:.4rem}
table{border-collapse:collapse}th,td{border:1px solid var(--bd);padding:.3rem .6rem}
blockquote{border-left:3px solid var(--bd);margin:.5rem 0;padding:.2rem 1rem;color:var(--muted)}
code{font-family:Consolas,'Cascadia Code',monospace;font-size:.9em;background:var(--bd);border-radius:4px;padding:.05rem .3rem}
pre code{background:none;padding:0;border-radius:0}
pre:not(.hit-sig):not(.signature){background:var(--code-bg);color:#e2e8f0;border-radius:10px;padding:.9rem 1rem;overflow:auto}
.detail{background:var(--card);border:1px solid var(--bd);border-radius:12px;padding:1rem 1.2rem;margin:.8rem 0;overflow:auto}
.detail h1,.detail h2,.detail h3{font-size:1.05em}`,
);

const pageCount = [...pagesByDir.values()].reduce((a, b) => a + b.length, 0);
console.log(`站点生成完成: ${pageCount} 个条目页（危险标注 ${[...dangerByLang.values()].reduce((a, b) => a + b.length, 0)}）→ ${DIST}`);
