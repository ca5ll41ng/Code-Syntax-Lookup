// sources/js_adapter.mjs
// MDN Web Docs（JavaScript 参考/指南，en + zh-CN 翻译）+ Node.js 官方 API 文档 + ANTLR JS 语法 → corpus/js/**
// zh 优先：translated-content 有对应页面用中文，否则回退英文
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import MarkdownIt from 'markdown-it';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MDN_EN = path.join(ROOT, 'raw', 'mdn-content', 'files', 'en-us', 'web', 'javascript');
const MDN_ZH = path.join(ROOT, 'raw', 'mdn-zh', 'files', 'zh-cn', 'web', 'javascript');
const NODE_DOC = path.join(ROOT, 'raw', 'nodejs', 'doc', 'api');
const G4 = path.join(ROOT, 'raw', 'grammars-v4', 'javascript', 'JavaScript', 'JavaScriptParser.g4');
const OUT = path.join(ROOT, 'corpus', 'js');
const UPDATED = new Date().toISOString().slice(0, 10);
const LICENSE_MDN = 'CC-BY-SA-2.5';
const LICENSE_NODE = 'CC-BY-4.0';

const md = new MarkdownIt({ html: false, linkify: false });

function parseFrontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n/);
  const fm = {};
  if (m) for (const line of m[1].split('\n')) {
    const km = line.match(/^([A-Za-z_-]+):\s*(.*)$/);
    if (!km) continue;
    try { fm[km[1]] = JSON.parse(km[2]); } catch { fm[km[1]] = km[2]; }
  }
  return { fm, body: text.slice(m ? m[0].length : 0) };
}

// MDN 宏与嵌入清理
function cleanMdn(s) {
  return s
    .replace(/\{\{Compat[^}]*\}\}/g, '')
    .replace(/\{\{(domxref|jsxref|jsxrefref|JSxref)\(\s*"([^"]*)"[^)]*\)\s*\}\}/g, '`$2`')
    .replace(/\{\{(jsxref|Glossary|non-standard_inline|experimental_inline|deprecated_inline|obsolete_inline|optional_inline|readonlyInline)\(([^)]*)\)\s*\}\}/g, '$2')
    .replace(/\{\{AvailableInWorkers\}\}/g, '*可用在 Worker 环境*')
    .replace(/\{\{[A-Za-z][^}]{0,80}\}\}/g, (m) => {
      const inner = m.slice(2, -2).trim();
      const q = inner.match(/"([^"]{1,60})"/);
      return q ? '`' + q[1] + '`' : '';
    })
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '$2')
    .replace(/\[\[([^\]]+)\]\]/g, '$1')
    .replace(/\n{3,}/g, '\n\n');
}

function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (e.name.endsWith('.md')) out.push(p);
  }
  return out;
}

// 精选 JS 危险函数/污点清单（综合 OWASP Cheat Sheets、MDN 安全提示与 Node.js 安全最佳实践人工整理）
const JS_DANGER = [
  { name: 'eval', cwe: ['CWE-95'], note: '动态执行 JS 字符串 = 注入 sink；改用 JSON.parse 或白名单逻辑' },
  { name: 'Function', cwe: ['CWE-95'], note: 'Function 构造器等价于 eval' },
  { name: 'setTimeout', cwe: ['CWE-95'], note: '第一个参数为字符串时按 eval 执行' },
  { name: 'setInterval', cwe: ['CWE-95'], note: '同 setTimeout 的字符串执行风险' },
  { name: 'Math.random', cwe: ['CWE-338'], note: '非密码学安全随机，不可用于令牌/密钥' },
  { name: 'node:child_process', cwe: ['CWE-78'], note: '命令注入 sink；拼接用户输入即 RCE' },
  { name: 'node:vm', cwe: ['CWE-94'], note: 'vm 沙箱不是安全边界，可被逃逸' },
  { name: 'node:fs', cwe: ['CWE-22'], note: '路径拼接用户输入可致目录穿越/任意读写' },
  { name: 'node:crypto', cwe: ['CWE-327'], note: 'md5/sha1 已不安全，弱随机勿用于安全用途' },
  { name: 'node:http', cwe: ['CWE-918'], note: '请求 URL 含用户输入时为 SSRF sink' },
  { name: 'node:https', cwe: ['CWE-918'], note: '请求 URL 含用户输入时为 SSRF sink' },
  { name: 'node:inspector', cwe: ['CWE-94'], note: '调试端口暴露等同于 RCE' },
  { name: 'innerHTML', standalone: true, url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Element/innerHTML', cwe: ['CWE-79'], note: 'XSS 注入 sink：赋值不可信 HTML 会执行其中脚本' },
  { name: 'outerHTML', standalone: true, url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Element/outerHTML', cwe: ['CWE-79'], note: 'XSS 注入 sink' },
  { name: 'insertAdjacentHTML', standalone: true, url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Element/insertAdjacentHTML', cwe: ['CWE-79'], note: 'XSS 注入 sink' },
  { name: 'document.write', standalone: true, url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Document/write', cwe: ['CWE-79'], note: '向文档流写入不可信 HTML = XSS' },
  { name: 'Storage.setItem', standalone: true, url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Storage/setItem', cwe: ['CWE-922'], note: 'localStorage 明文存储敏感信息' },
  { name: 'window.postMessage', standalone: true, url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage', cwe: ['CWE-346'], note: '需校验 event.origin，否则跨源消息注入' },
  { name: 'Location.assign', standalone: true, url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Location/assign', cwe: ['CWE-601'], note: '重定向目标含用户输入 = 开放重定向' },
];
const JS_DANGER_MAP = new Map(JS_DANGER.map((d) => [d.name.toLowerCase(), d]));

// ---------- MDN（en + zh 合并，zh 优先） ----------
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

const stats = { entries: 0, byLang: { en: 0, zh: 0 }, byCat: {} };
const written = new Set();

function categoryOf(rel, pageType) {
  const p = rel.replace(/\\/g, "/");
  if (p.includes("/guide/") || p.includes("/Guide")) return "guide";
  if (String(pageType || "").startsWith("javascript-")) return "function";
  return "syntax";
}

// 实际实现：直接遍历两棵树
for (const f of walk(MDN_EN)) {
  const rel = path.relative(MDN_EN, f);
  const zhFile = path.join(MDN_ZH, rel);
  const hasZh = fs.existsSync(zhFile);
  for (const lang of ['en', 'zh']) {
    if (lang === 'zh' && !hasZh) continue;
    const src = lang === 'zh' ? zhFile : f;
    const raw = fs.readFileSync(src, 'utf8').replace(/\r\n/g, '\n');
    const { fm, body } = parseFrontmatter(raw);
    if (!fm.slug || !fm.title) continue;
    const title = String(fm.title).replace(/\(\)$/, '');
    const name = title.includes('/') ? title.split('/').pop() : title;
    const pageType = fm['page-type'] || '';
    const category = categoryOf(rel, pageType);
    const cleaned = cleanMdn(body);
    if (!cleaned.trim()) continue;
    const slugSlug = String(fm.slug).toLowerCase().replace(/[^a-z0-9_/-]+/g, '-').replace(/-{2,}/g, '-');
    const id = `js-${lang}-${category}-${slugSlug.replace(/[/-]/g, '-').replace(/^-+|-+$/g, '')}`;
    if (written.has(id)) continue;
    written.add(id);
    const fmOut = {
      id,
      language: 'js',
      lang,
      category,
      name,
      title: String(fm.title),
      ...(pageType ? { directive: pageType } : {}),
      module: rel.split('/').slice(0, 2).join('/'),
      source_url: `https://developer.mozilla.org/${lang === 'zh' ? 'zh-cn' : 'en-us'}/docs/${fm.slug}`,
      license: LICENSE_MDN,
      updated: UPDATED,
    };
    const danger = JS_DANGER_MAP.get(name.toLowerCase());
    if (danger) fmOut.danger = [{ type: 'sink', ...(danger.cwe ? { cwe: danger.cwe } : {}), ...(danger.note ? { note: danger.note } : {}) }];
    const yaml = Object.entries(fmOut).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join('\n');
    const outPath = path.join(OUT, lang, rel.replace(/\.md$/, '.md'));
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, `---\n${yaml}\n---\n\n# ${fmOut.title}\n\n${cleaned.trim()}\n`, 'utf8');
    stats.entries += 1;
    stats.byLang[lang] += 1;
    stats.byCat[category] = (stats.byCat[category] || 0) + 1;
  }
}

// ---------- 浏览器 DOM sink 独立安全条目（web/api 语料未收录，按精选清单生成） ----------
for (const d of JS_DANGER) {
  if (!d.standalone) continue;
  const slug = d.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  const fm = {
    id: `js-zh-security-${slug}`,
    language: 'js',
    lang: 'zh',
    category: 'security',
    name: d.name,
    title: `${d.name} — 危险用法与审计要点`,
    directive: 'security-note',
    module: 'browser-dom',
    source_url: d.url,
    license: 'CC-BY-SA-2.5',
    updated: UPDATED,
    danger: [{ type: 'sink', ...(d.cwe ? { cwe: d.cwe } : {}), ...(d.note ? { note: d.note } : {}) }],
  };
  const yaml = Object.entries(fm).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join('\n');
  const content = `# ${d.name}\n\n**危险等级**：sink${d.cwe ? '（' + d.cwe.join(', ') + '）' : ''}\n\n${d.note}\n\n## 审计要点\n\n- 全局搜索代码中对该 API 的调用，确认数据来源是否可信\n- 不可信输入到达此处即构成注入/滥用路径，需在进入前净化或改用安全 API\n\n## 参考\n\n- MDN: ${d.url}\n- OWASP Cheat Sheet Series（见知识库 security 分类）\n`;
  const secPath = path.join(OUT, 'zh', 'security', `${slug}.md`);
  fs.mkdirSync(path.dirname(secPath), { recursive: true });
  fs.writeFileSync(secPath, `---\n${yaml}\n---\n\n${content}\n`, 'utf8');
  stats.entries += 1;
  stats.byLang.zh += 1;
}

// ---------- Node.js 官方 API 文档 ----------
const NODE_LICENSE = 'CC-BY-4.0';
if (fs.existsSync(NODE_DOC)) {
  for (const f of walk(NODE_DOC)) {
    const base = path.basename(f, '.md');
    if (['index', 'synopsis', 'module', 'glossary'].includes(base)) continue;
    const raw = fs.readFileSync(f, 'utf8').replace(/\r\n/g, '\n');
    const nameM = raw.match(/<!--name=([\w:./-]+)-->/);
    const rawName = nameM ? nameM[1] : `node:${base}`;
    const name = rawName.includes(':') ? rawName : `node:${rawName}`;
    const titleM = raw.match(/^# (.+)$/m);
    // 简化说明：取首段非标记文本
    const firstPara = (raw.replace(/<!--[\s\S]*?-->/g, '').split('\n\n').map((s) => s.trim()).find((s) => s && !s.startsWith('#') && !s.startsWith('>')) || '').replace(/\n/g, ' ');
    const fm = {
      id: `js-en-function-node-${base}`,
      language: 'js',
      lang: 'en',
      category: 'function',
      name,
      title: titleM ? titleM[1] : `Node.js ${base} API`,
      directive: 'module',
      module: 'node',
      source_url: `https://nodejs.org/docs/latest/api/${base}.html`,
      license: NODE_LICENSE,
      updated: UPDATED,
    };
    const ndanger = JS_DANGER_MAP.get(name.toLowerCase()) || JS_DANGER_MAP.get(rawName.toLowerCase());
    if (ndanger) fm.danger = [{ type: 'sink', ...(ndanger.cwe ? { cwe: ndanger.cwe } : {}), ...(ndanger.note ? { note: ndanger.note } : {}) }];
    const yaml = Object.entries(fm).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join('\n');
    const outPath = path.join(OUT, 'en', 'node', `${base}.md`);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, `---\n${yaml}\n---\n\n# ${fm.title}\n\n${md.render(raw.replace(/<!--[\s\S]*?-->/g, '')).trim()}\n`, 'utf8');
    stats.entries += 1;
    stats.byLang.en += 1;
  }
  stats.byCat.function = (stats.byCat.function || 0) + 0;
}

// ---------- ANTLR JS 语法条目 ----------
if (fs.existsSync(G4)) {
  const text = fs.readFileSync(G4, 'utf8');
  const re = /^([a-zA-Z_][\w]*)\s*:\s*([\s\S]*?);/gm;
  let m;
  let g = 0;
  while ((m = re.exec(text))) {
    g += 1;
    const fm = {
      id: `js-en-grammar-js-${m[1].toLowerCase()}`,
      language: 'js',
      lang: 'en',
      category: 'grammar',
      name: m[1],
      title: `ECMAScript 语法规则：${m[1]}`,
      directive: 'rule',
      module: 'ecmascript',
      source_url: 'https://github.com/antlr/grammars-v4/tree/master/javascript/JavaScript',
      license: 'MIT',
      updated: UPDATED,
    };
    const yaml = Object.entries(fm).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join('\n');
    const gPath = path.join(OUT, 'en', 'grammar', `js-${m[1]}.md`);
    fs.mkdirSync(path.dirname(gPath), { recursive: true });
    fs.writeFileSync(gPath, `---\n${yaml}\n---\n\n# ${fm.title}\n\n\`\`\`antlr\n${m[1]} : ${m[2].trim()} ;\n\`\`\`\n\n来源：[antlr/grammars-v4 JavaScript](https://github.com/antlr/grammars-v4/tree/master/javascript/JavaScript)（依据 ECMA-262 移植）。\n`);
    stats.entries += 1;
  }
  console.log(`ANTLR JS 语法规则: ${g}`);
}

console.log('JS 语料生成完成:', stats);
