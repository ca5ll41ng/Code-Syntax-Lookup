// sources/python_adapter.mjs
// cpython Doc/ (reST/Sphinx) → corpus/python/{en|zh}/**.md
// - library/*.rst 按 Sphinx 指令（function/method/class/data/exception/...）切成条目
// - reference/**（语法）、howto/using/**（指南）整文件成条
// - 中文：python-docs-zh-cn 3.14 分支 .po 做段落级对齐，无翻译段落回退英文
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DOC = path.join(ROOT, 'raw', 'cpython', 'Doc');
const GRAMMAR = path.join(ROOT, 'raw', 'cpython', 'Grammar', 'python.gram');
const ZH_CN = path.join(ROOT, 'raw', 'python-docs-zh-cn');
const OUT = path.join(ROOT, 'corpus', 'python');
const UPDATED = new Date().toISOString().slice(0, 10);
const LICENSE = 'PSF';

// ---------- .po 解析（gettext 最小实现：msgid/msgstr 对，跳过 fuzzy 与复数） ----------
function parsePo(text) {
  const map = new Map();
  const lines = text.split('\n');
  let i = 0;
  const readStr = (line) => {
    // 读取一个或多个连续的 "..." 字符串（含续行）
    const parts = [];
    let cur = line.trim();
    while (cur.startsWith('"')) {
      parts.push(cur.slice(1, cur.lastIndexOf('"')));
      i += 1;
      cur = (lines[i] ?? '').trim();
    }
    return parts.join('');
  };
  const unesc = (s) => s.replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\t/g, '\t').replace(/\\\\/g, '\\');
  let fuzzy = false;
  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith('#,') && line.includes('fuzzy')) { fuzzy = true; i += 1; continue; }
    if (line.startsWith('msgid')) {
      const msgid = unesc(readStr(line.slice(5).trim() ? line.slice(5).trim() : '""'));
      // 头部（msgid ""）与空翻译跳过
      let msgstr = '';
      if (i < lines.length && lines[i].startsWith('msgstr')) {
        msgstr = unesc(readStr(lines[i].slice(6).trim() || '""'));
      } else {
        // msgid_plural 或异常结构：跳过到下一个 msgstr 行
        while (i < lines.length && !lines[i].startsWith('msgstr')) i += 1;
        if (i < lines.length) msgstr = unesc(readStr(lines[i].slice(6).trim() || '""'));
      }
      if (!fuzzy && msgid && msgstr && !map.has(msgid)) map.set(msgid, msgstr);
      fuzzy = false;
      continue;
    }
    fuzzy = false;
    i += 1;
  }
  return map;
}

function loadPo(relRst) {
  const poPath = path.join(ZH_CN, relRst.replace(/\.rst$/, '.po'));
  if (!fs.existsSync(poPath)) return null;
  return parsePo(fs.readFileSync(poPath, 'utf8'));
}

// ---------- reST → Markdown ----------
const INLINE_ROLE = /:([a-zA-Z_][a-zA-Z0-9_.-]*):`([^`]*)`/g;
function renderInline(s) {
  return s
    .replace(INLINE_ROLE, (m, role, content) => {
      if (role === 'pep') return `PEP ${content}`;
      if (role === 'rfc') return `RFC ${content}`;
      // ref/getterm 等带 <> 目标的：只保留显示文本；'!' 是 Sphinx 的"禁止链接"标记，剥掉
      const clean = content.startsWith('!') ? content.slice(1) : content;
      const display = clean.includes('<') ? clean.slice(0, clean.indexOf('<')).trim() : clean;
      return '`' + (display || clean) + '`';
    })
    .replace(/``([^`]+)``/g, '`$1`')
    .replace(/`([^`<\n]+?) <(https?:\/\/[^>]+)>`__/g, '[$1]($2)')
    .replace(/`([^`<\n]+?) <(https?:\/\/[^>]+)>`_/g, '[$1]($2)')
    .replace(/`(\w+)<(https?:\/\/[^>]+)>`__/g, '[$1]($2)')
    .replace(/`https?:\/\/[^`]+`_/g, (m) => '`' + m.slice(1, -2) + '`')
    .replace(/\|#?([^|]*)\|/g, '$1'); // 替换引用 |label|
}

// 指令集合
const ENTRY_DIRECTIVES = new Set(['function', 'method', 'classmethod', 'staticmethod', 'class', 'exception', 'data', 'attribute', 'decorator', 'decoratormethod']);
const SKIP_DIRECTIVES = new Set(['index', 'toctree', 'highlight', 'only', 'tabularcolumns', 'todo', 'role', 'declaration', 'module']);
const ADMONITIONS = new Set(['note', 'warning', 'important', 'seealso', 'admonition', 'hint', 'caution', 'attention', 'danger', 'error', 'tip']);

const indentOf = (line) => line.match(/^\s*/)[0].length;
const isEmpty = (line) => !line.trim();

// 收集从 lines[idx] 开始、缩进 > base 的连续内容块（允许内部空行）
function collectIndented(lines, idx, base) {
  const out = [];
  let i = idx;
  while (i < lines.length) {
    const line = lines[i];
    if (isEmpty(line)) { out.push(''); i += 1; continue; }
    if (indentOf(line) <= base) break;
    out.push(line);
    i += 1;
  }
  while (out.length && isEmpty(out[out.length - 1])) out.pop();
  return [out, i];
}

const dedent = (lines) => {
  const base = Math.min(...lines.filter((l) => !isEmpty(l)).map(indentOf));
  return lines.map((l) => (isEmpty(l) ? '' : l.slice(base)));
};

// 段落渲染器：行数组 → markdown。返回 {md, zhCount}
function renderBlocks(lines, po, stats) {
  const out = [];
  let i = 0;
  const emit = (s) => out.push(s);
  while (i < lines.length) {
    const line = lines[i];
    if (isEmpty(line)) { i += 1; continue; }
    const ind = indentOf(line);
    const dm = line.match(/^(\s*)\.\.\s+([a-zA-Z_-]+)::\s*(.*)$/);
    if (dm) {
      const dir = dm[2], arg = dm[3].trim();
      const [inner, next] = collectIndented(lines, i + 1, ind);
      i = next;
      const bodyLines = dedent(inner);
      const bodyMd = () => renderBlocks(bodyLines, po, stats).md;
      if (dir === 'versionadded' || dir === 'versionchanged' || dir === 'versionremoved' || dir === 'deprecated') {
        emit(`> *${dir === 'versionadded' ? 'Added in' : dir === 'versionchanged' ? 'Changed in' : dir === 'versionremoved' ? 'Removed in' : 'Deprecated since'} ${arg}*${bodyLines.length ? ': ' + bodyLines.join(' ').trim() : ''}\n`);
      } else if (ADMONITIONS.has(dir)) {
        const title = dir === 'admonition' ? arg : dir.charAt(0).toUpperCase() + dir.slice(1);
        emit(`> **${title}**\n>\n` + bodyMd().split('\n').map((l) => (l ? '> ' + l : '>')).join('\n') + '\n');
      } else if (dir === 'code-block' || dir === 'sourcecode' || dir === 'testcode' || dir === 'doctest' || dir === 'highlight-none') {
        const lang = dir === 'highlight-none' ? 'text' : arg || 'python';
        emit('```' + (dir === 'doctest' ? 'python' : lang) + '\n' + bodyLines.join('\n') + '\n```\n');
      } else if (dir === 'productionlist') {
        emit('```text\n' + bodyLines.join('\n') + '\n```\n');
      } else if (dir === 'rubric') {
        emit(`#### ${arg}\n`);
      } else if (dir === 'math') {
        emit('```text\n' + arg + '\n' + bodyLines.join('\n') + '\n```\n');
      } else if (SKIP_DIRECTIVES.has(dir)) {
        // 丢弃
      } else {
        emit(renderBlocks([line.replace(/^(\s*)\.\.\s+/, '$1')], po, stats).md); // 未知指令兜底为文本
      }
      continue;
    }
    // 段落/列表：连续非空且非指令头/标题的行
    const para = [];
    let isHeading = false;
    while (i < lines.length) {
      const l = lines[i];
      if (isEmpty(l)) break;
      const d2 = l.match(/^(\s*)\.\.\s+([a-zA-Z_-]+)::/);
      if (d2) break;
      // 段落收集
      para.push(l);
      i += 1;
      // 标题检测：下一行是 ==/-- 等下划线
      if (i < lines.length && /^=+$|^-$|^-{3,}$|^~+$|\^+$/.test(lines[i].trim()) && lines[i].trim().length >= Math.max(3, para[para.length - 1].trim().length - 2)) {
        isHeading = lines[i].trim();
        i += 1;
        break;
      }
    }
    if (isHeading) {
      const text = renderInline(para.join(' ').trim());
      emit(`**${text}**\n`);
    } else if (para.length) {
      // 纯划线/等号行（分隔线）丢弃
      if (para.length === 1 && /^[-=~^]{3,}$/.test(para[0].trim())) continue;
      const block = para.join('\n');
      let text = renderInline(block);
      if (po) {
        const t = po.get(block) || po.get(text);
        if (t && t.trim()) { text = t; stats.zhBlocks += 1; }
      }
      emit(text + '\n');
    }
  }
  return { md: out.join('\n'), };
}

// ---------- 库文件（library/**）按指令切条目 ----------
function splitDirectives(lines) {
  // 返回 [{pre: 前置段落行, directive: 'function', args: [arg行们], options: [], body: 行数组}]
  const chunks = [];
  let i = 0;
  let pre = [];
  while (i < lines.length) {
    const line = lines[i];
    const dm = line.match(/^\.\.\s+([a-zA-Z_-]+)::\s*(.*)$/);
    if (dm && ENTRY_DIRECTIVES.has(dm[1])) {
      const dir = dm[1];
      const argLines = [dm[2]];
      i += 1;
      // 签名续行（缩进 ≥ 8 且不是选项/空行）与 :options:
      while (i < lines.length) {
        const l = lines[i];
        if (isEmpty(l)) break;
        if (/^\s+:/.test(l)) { i += 1; continue; } // :noindex: 等选项
        if (/^ {8,}\S/.test(l)) { argLines.push(l.trim()); i += 1; continue; }
        break;
      }
      // 空行后是缩进正文
      while (i < lines.length && isEmpty(lines[i])) i += 1;
      const [body, next] = collectIndented(lines, i, 0);
      i = next;
      chunks.push({ pre: null, directive: dir, argLines, body });
      pre = [];
    } else {
      // 文件级小节标题也会落进 pre —— 用"段落累积"直到遇到下一个指令
      pre.push(line);
      i += 1;
    }
  }
  return { chunks, pre };
}

// ---------- 生成条目 ----------
function makeEntry({ rel, module, category, directive, name, title, signature, contentLines, po, lang, anchor }) {
  const stats = { zhBlocks: 0 };
  const { md } = renderBlocks(contentLines, lang === 'zh' ? po : null, stats);
  if (!md.trim()) return null;
  const isZh = lang === 'zh' && po && stats.zhBlocks > 0;
  const useLang = isZh ? 'zh' : 'en';
  if (lang === 'zh' && !isZh) return null; // zh 文件整体无翻译则不产出 zh 条目
  // 保留名字中的下划线（__main__ 等），分隔符统一为 '-'
  const slug = `${module}-${name}`.toLowerCase().replace(/[^a-z0-9_]+/g, '-').replace(/-{2,}/g, '-').replace(/^-+|-+$/g, '');
  const relNorm = rel.replace(/\\/g, '/');
  const fm = {
    id: `python-${useLang}-${category}-${slug}`,
    language: 'python',
    lang: useLang,
    category,
    name,
    ...(signature ? { signature } : {}),
    ...(title ? { title } : {}),
    ...(directive ? { directive } : {}),
    module,
    source_url: `https://docs.python.org/${useLang === 'zh' ? 'zh-cn/3' : '3'}/${relNorm.replace(/\.rst$/, '.html')}${anchor ? '#' + anchor : ''}`,
    license: LICENSE,
    updated: UPDATED,
  };
  const yaml = Object.entries(fm).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join('\n');
  return { fm, md: `---\n${yaml}\n---\n\n# ${fm.title || fm.name}\n\n${md.trim()}\n`, outRel: `${useLang}/${relNorm.replace(/\.rst$/, '')}-${slug}.md` };
}

// library 模块名推断：library/email/mime.rst → email.mime；library/os.rst → os；.../index.rst → 目录名
function moduleOf(rel) {
  let p = rel.slice('library/'.length).replace(/\.rst$/, '');
  p = p.replace(/\\/g, '/').split('/').filter((s) => s !== 'index').join('.');
  return p;
}

const FIRST_PARA_TITLE = (lines) => {
  const t = lines.find((l) => !isEmpty(l) && !/^\.\./.test(l));
  return t ? renderInline(t.trim()).slice(0, 90) : '';
};

// ---------- 主流程 ----------
fs.rmSync(OUT, { recursive: true, force: true });
const stats = { files: 0, entries: 0, byLang: { en: 0, zh: 0 }, skipped: 0 };
const written = new Set();

function emitEntry(rel, po, entryArgs) {
  for (const lang of ['en', 'zh']) {
    if (lang === 'zh' && !po) continue;
    const e = makeEntry({ rel, po, lang, ...entryArgs });
    if (!e) continue;
    const key = e.fm.id;
    if (written.has(key)) continue;
    written.add(key);
    const outPath = path.join(OUT, e.outRel.replace(/\//g, path.sep));
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, e.md, 'utf8');
    stats.byLang[e.fm.lang] += 1;
    stats.entries += 1;
  }
}

function handleRst(relOrig) {
  let rel = relOrig.replace(/\\/g, '/'); // Windows path.relative 归一化
  const text = fs.readFileSync(path.join(DOC, rel), 'utf8').replace(/\r\n/g, '\n');
  const po = loadPo(rel);
  // Doc/builtins/*.rst（eval/open 等内建函数）在站点上渲染于 library/functions.html
  let urlRel = rel;
  if (rel.startsWith('builtins/')) urlRel = rel.replace(/^builtins\//, 'library/');
  const top = urlRel.split('/')[0];
  rel = urlRel; // 之后的 source_url / 输出路径都按站点映射后的路径
  let category;
  if (top === 'library' || top === 'builtins') category = 'function';
  else if (top === 'reference') category = 'syntax';
  else category = 'guide';

  if (top !== 'library' && top !== 'builtins') {
    // 整文件一条（语法/指南）
    const lines = text.split('\n');
    // 去掉文件级 toctree/index 指令块
    emitEntry(rel, po, {
      module: path.basename(rel, '.rst'),
      category,
      directive: null,
      name: path.basename(rel, '.rst'),
      title: FIRST_PARA_TITLE(lines),
      signature: null,
      contentLines: lines,
      anchor: null,
    });
    stats.files += 1;
    return;
  }

  // builtins/functions.rst → module='builtins'，页面锚点是裸函数名（#eval）
  const topOrig = relOrig.replace(/\\/g, '/').split('/')[0];
  const module = topOrig === 'builtins' ? 'builtins' : moduleOf(urlRel);
  const lines = text.split('\n');
  const { chunks, pre } = splitDirectives(lines);
  // 模块标题优先取 :synopsis:，否则取首段
  const syn = text.match(/:synopsis:\s*(.+)$/);
  const moduleTitle = syn ? syn[1].trim() : FIRST_PARA_TITLE(pre);

  // 模块概述条目（首个指令前的内容）
  if (pre.some((l) => !isEmpty(l))) {
    emitEntry(rel, po, {
      module,
      category: 'function',
      directive: 'module',
      name: module,
      title: moduleTitle,
      signature: null,
      contentLines: pre,
      anchor: `module-${module}`,
    });
  }

  for (const ch of chunks) {
    // 指令体去缩进
    const body = dedent(ch.body);
    for (const sigLine of ch.argLines.map((l) => l.trim()).filter(Boolean)) {
      const m = sigLine.match(/^([A-Za-z_][\w.]*)\s*\(([\s\S]*)\)$/);
      const name = m ? m[1] : sigLine;
      const hasArgs = Boolean(m);
      const shortName = name.startsWith(module + '.') ? name.slice(module.length + 1) : name;
      emitEntry(rel, po, {
        module,
        category: 'function',
        directive: ch.directive,
        name,
        title: '',
        signature: hasArgs ? `${name}(${m[2]})` : null,
        contentLines: body,
        anchor: (topOrig === 'builtins' ? '' : module + '.') + shortName,
      });
    }
  }
  stats.files += 1;
}

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (e.name.endsWith('.rst')) out.push(p);
  }
  return out;
}

const SKIP_TOP = new Set(['tutorial', 'faq', 'whatsnew', 'c-api', 'extending', 'deprecations', 'distutils', 'installing', 'tools']);
const rstFiles = walk(DOC).map((p) => path.relative(DOC, p)).filter((rel) => {
  const top = rel.split(/[\\/]/)[0];
  return !SKIP_TOP.has(top);
});
for (const rel of rstFiles) handleRst(rel);

// 官方 PEG 语法文件 → 单条 grammar 条目
if (fs.existsSync(GRAMMAR)) {
  const gram = fs.readFileSync(GRAMMAR, 'utf8');
  const fm = {
    id: 'python-en-grammar-python-gram',
    language: 'python',
    lang: 'en',
    category: 'grammar',
    name: 'python.gram',
    title: 'Python 官方 PEG 语法（完整产生式）',
    module: 'grammar',
    source_url: 'https://github.com/python/cpython/blob/main/Grammar/python.gram',
    license: LICENSE,
    updated: UPDATED,
  };
  const yaml = Object.entries(fm).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join('\n');
  const outPath = path.join(OUT, 'en', 'grammar', 'python-gram.md');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, `---\n${yaml}\n---\n\n# ${fm.title}\n\n\`\`\`text\n${gram}\n\`\`\`\n`);
  stats.entries += 1;
  stats.byLang.en += 1;
}

console.log('Python 语料生成完成:', stats, '（去重前未计入 skipped）');
