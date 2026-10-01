// sources/php_adapter.mjs
// php/doc-en + php/doc-zh (DocBook 5 XML) → corpus/php/{en|zh}/**.md
// 策略：中文优先（doc-zh 存在同路径文件则用中文，否则回退英文并标记 lang）
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { XMLParser } from 'fast-xml-parser';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'corpus', 'php');
const LANGS = { zh: path.join(ROOT, 'raw', 'doc-zh'), en: path.join(ROOT, 'raw', 'doc-en') };
const TOP_DIRS = ['reference', 'language', 'security', 'features'];
const CATEGORY_BY_DIR = { reference: null, language: 'syntax', security: 'security', features: 'guide' };
const LICENSE = 'CC-BY-3.0';
const UPDATED = new Date().toISOString().slice(0, 10);

// ---------- 实体解析（&reftitle.description; 等定义在 *.ent 中） ----------
function loadEntities(dir) {
  const map = new Map();
  const files = [];
  const scan = (d) => {
    if (!fs.existsSync(d)) return;
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) scan(p);
      else if (e.name.endsWith('.ent')) files.push(p);
    }
  };
  scan(dir); // 根目录的 *.ent
  scan(path.join(dir, 'entities'));
  for (const f of files) {
    const txt = fs.readFileSync(f, 'utf8');
    for (const m of txt.matchAll(/<!ENTITY\s+([A-Za-z0-9._-]+)\s+(['"])([\s\S]*?)\2\s*>/g)) {
      if (!map.has(m[1])) map.set(m[1], m[3]);
    }
  }
  return map;
}
const PREDEFINED = new Set(['lt', 'gt', 'amp', 'quot', 'apos']);

// phpdoc 构建系统运行时注入的基础实体（doc-en 仓库里没有定义），这里内置：
// 标准章节标题（中英双语，与 php.net 渲染一致）+ PHP 类型名
const TYPE_NAMES = ['string', 'int', 'integer', 'float', 'double', 'bool', 'boolean', 'array', 'object', 'mixed', 'callable', 'iterable', 'void', 'resource', 'number', 'scalar', 'null', 'true', 'false'];
function builtinMap(lang) {
  const titles = lang === 'zh'
    ? { description: '说明', parameters: '参数', returnvalues: '返回值', errors: '错误／异常', changelog: '更新日志', examples: '范例', notes: '注释', intro: '简介', constants: '预定义常量', classsynopsis: '类摘要', setup: '环境要求', install: '安装', runtime: '运行时配置', resources: '资源类型', required: '需求', properties: '属性', configuration: '配置', seealso: '参见' }
    : { description: 'Description', parameters: 'Parameters', returnvalues: 'Return Values', errors: 'Errors/Exceptions', changelog: 'Changelog', examples: 'Examples', notes: 'Notes', intro: 'Introduction', constants: 'Predefined Constants', classsynopsis: 'Class Synopsis', setup: 'Getting Started', install: 'Installation', runtime: 'Runtime Configuration', resources: 'Resource Types', required: 'Requirements', properties: 'Properties', configuration: 'Configuration', seealso: 'See Also' };
  const m = new Map();
  for (const [k, v] of Object.entries(titles)) m.set(`reftitle.${k}`, `<title>${v}</title>`);
  for (const t of TYPE_NAMES) m.set(t, ['null', 'true', 'false'].includes(t) ? `<constant>${t}</constant>` : `<type>${t}</type>`);
  m.set('php.ini', 'php.ini');
  return m;
}
function resolveEntities(xml, map, stats) {
  for (let i = 0; i < 3; i++) {
    xml = xml.replace(/&([A-Za-z0-9._-]+);/g, (m, name) => {
      if (PREDEFINED.has(name)) return m;
      const v = map.get(name);
      if (v === undefined) { stats.unresolved.add(name); return m; }
      return v;
    });
  }
  return xml;
}

// ---------- DocBook 解析（fast-xml-parser, preserveOrder） ----------
const parser = new XMLParser({
  preserveOrder: true,
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  commentPropName: '#comment',
  cdataPropName: '#cdata',
  parseTagValue: false,
  parseAttributeValue: false,
  trimValues: false,
  ignoreDeclaration: true,
  ignorePiTags: true,
  processEntities: true,
});

const tagOf = (n) => Object.keys(n).find((k) => k !== ':@');
const attrsOf = (n) => n[':@'] || {};
const kidsOf = (n) => { const v = n[tagOf(n)]; return Array.isArray(v) ? v : []; };
const textOf = (n) => {
  const t = tagOf(n);
  const v = n[t];
  if (typeof v === 'string') return v;
  if (Array.isArray(v)) return v.map((x) => (typeof x === 'string' ? x : x && typeof x === 'object' ? textOf(x) : String(x))).join('');
  return v == null ? '' : String(v);
};
const findKid = (n, tag) => kidsOf(n).find((k) => tagOf(k) === tag);

function collapse(s) { return s.replace(/\s+/g, ' '); }

// union/intersection 类型展平：<type class="union"><type>array</type><type>string</type></type> → array|string
function flattenType(n) {
  const cls = attrsOf(n)['@_class'];
  const parts = [];
  for (const k of kidsOf(n)) {
    const t = tagOf(k);
    if (t === 'type') parts.push(flattenType(k));
    else if (t === '#text') { const s = collapse(textOf(k)).trim(); if (s) parts.push(s); }
    else parts.push(collapse(renderInline(kidsOf(k))).trim());
  }
  if (!parts.length) return '';
  return parts.length > 1 ? parts.join(cls === 'intersection' ? '&' : '|') : parts[0];
}
// 纯文本（用于签名，无反引号标记）
const plainText = (nodes) => collapse(renderInline(nodes)).replace(/`/g, '').trim();

// ---------- 渲染：DocBook 节点数组 → Markdown ----------
function renderInline(nodes) {
  let out = '';
  for (const n of nodes) {
    const t = tagOf(n);
    if (t === '#text') { out += collapse(textOf(n)); continue; }
    if (t === '#cdata') { out += textOf(n); continue; }
    if (t === '#comment') continue;
    const kids = kidsOf(n);
    switch (t) {
      case 'para': case 'simpara': out += renderInline(kids) + ' '; break;
      case 'literal': case 'constant': case 'classname': case 'varname':
      case 'envarname': case 'filename': case 'computeroutput': case 'prompt':
      case 'modifier': case 'interface': case 'enumname': case 'typelib':
        out += '`' + renderInline(kids).trim() + '`'; break;
      case 'function': case 'methodname': out += '`' + renderInline(kids).trim() + '()`'; break;
      case 'parameter': out += '`$' + renderInline(kids).trim() + '`'; break;
      case 'type': out += '`' + flattenType(n) + '`'; break;
      case 'emphasis': out += '*' + renderInline(kids).trim() + '*'; break;
      case 'replaceable': out += '{' + renderInline(kids).trim() + '}'; break;
      case 'subscript': case 'superscript': out += renderInline(kids); break;
      case 'quoted': out += '"' + renderInline(kids) + '"'; break;
      case 'acronym': case 'abbrev': case 'personname': case 'email': case 'citetitle': case 'wordasword':
        out += renderInline(kids); break;
      case 'link': {
        const href = attrsOf(n)['@_xlink:href'] || attrsOf(n)['@_href'] || '';
        const txt = renderInline(kids).trim();
        out += href ? `[${txt || href}](${href})` : txt; break;
      }
      case 'uri': out += renderInline(kids); break;
      case 'xref': out += '`' + (attrsOf(n)['@_linkend'] || '') + '`'; break;
      case 'co': case 'callout': case 'annotation': break; // 代码标注锚点，正文丢弃
      case 'tag': out += '`<' + renderInline(kids).trim() + '>`'; break;
      case 'itemizedlist': case 'orderedlist': case 'variablelist':
      case 'programlisting': case 'screen': case 'table': case 'informaltable':
      case 'note': case 'tip': case 'warning': case 'caution': case 'important':
      case 'example': case 'blockquote': case 'mediaobject':
        out += '\n' + renderBlock(n); break; // 块级元素混入行内时降级
      default: out += renderInline(kids); // 未知标签：递归兜底，不丢内容
    }
  }
  return out;
}

// 混合内容渲染：行内片段照常，块级子元素（列表/表格/代码块等）保持为块
const BLOCK_TAGS = new Set(['itemizedlist', 'orderedlist', 'variablelist', 'programlisting', 'screen', 'table', 'informaltable', 'note', 'tip', 'warning', 'caution', 'important', 'example', 'blockquote', 'mediaobject', 'calloutlist', 'para', 'simpara', 'refsect1', 'refsect2', 'refsect3', 'sect1', 'sect2', 'sect3', 'section', 'chapter', 'appendix']);
function renderMixed(nodes) {
  let out = '';
  let run = [];
  const flush = () => {
    const t = collapse(renderInline(run)).trim();
    if (t) out += t + '\n\n';
    run = [];
  };
  for (const n of nodes) {
    const t = tagOf(n);
    if (t === '#comment') continue;
    if (BLOCK_TAGS.has(t)) { flush(); out += renderBlock(n); }
    else run.push(n);
  }
  flush();
  return out;
}

function renderTable(n) {
  const tgroup = kidsOf(n).find((k) => tagOf(k) === 'tgroup') || n;
  const rows = [];
  for (const part of kidsOf(tgroup)) {
    const pt = tagOf(part);
    if (pt === 'thead' || pt === 'tbody') {
      for (const tr of kidsOf(part)) {
        if (tagOf(tr) !== 'row') continue;
        rows.push(kidsOf(tr).filter((c) => tagOf(c) === 'entry').map((c) => renderInline(kidsOf(c)).trim().replace(/\|/g, '\\|')));
      }
    }
  }
  if (!rows.length) return '';
  const head = rows.shift();
  let md = '| ' + head.join(' | ') + ' |\n| ' + head.map(() => '---').join(' | ') + ' |\n';
  for (const r of rows) md += '| ' + r.join(' | ') + ' |\n';
  return md + '\n';
}

function renderSynopsis(n) {
  let head = '';
  const params = [];
  for (const k of kidsOf(n)) {
    const t = tagOf(k);
    if (t === 'modifier') head += plainText(kidsOf(k)) + ' ';
    else if (t === 'type') head += flattenType(k) + ' ';
    else if (t === 'methodname' || t === 'function') head += plainText(kidsOf(k));
    else if (t === 'methodparam') {
      const opt = attrsOf(k)['@_choice'] === 'opt';
      let type = '', pname = '', init = '';
      for (const pk of kidsOf(k)) {
        const pt = tagOf(pk);
        if (pt === 'type') type += flattenType(pk) + ' ';
        else if (pt === 'parameter') pname = '$' + plainText(kidsOf(pk));
        else if (pt === 'initializer') init = plainText(kidsOf(pk));
      }
      let item = (type.trim() + ' ' + pname).trim();
      if (init) item += ' = ' + init;
      else if (opt) item += ' = ...';
      if (opt && !init) item = '[' + item + ']';
      params.push(item);
    }
  }
  return head.trim() + '(' + params.join(', ') + ')';
}

function renderBlock(n) {
  const t = tagOf(n);
  if (t === '#text') { const s = collapse(textOf(n)); return s.trim() ? s + '\n\n' : ''; }
  if (t === '#cdata') return textOf(n) + '\n\n';
  const kids = kidsOf(n);
  switch (t) {
    case 'para': case 'simpara': return renderMixed(kids);
    case 'br': return '\n';
    case 'itemizedlist': {
      let md = '';
      for (const li of kids) if (tagOf(li) === 'listitem') md += '- ' + collapse(renderInline(kidsOf(li))).trim() + '\n';
      return md + '\n';
    }
    case 'orderedlist': {
      let md = '', i = 1;
      for (const li of kids) if (tagOf(li) === 'listitem') md += `${i++}. ` + collapse(renderInline(kidsOf(li))).trim() + '\n';
      return md + '\n';
    }
    case 'variablelist': {
      let md = '';
      for (const vle of kids) {
        if (tagOf(vle) !== 'varlistentry') continue;
        const term = findKid(vle, 'term');
        const item = findKid(vle, 'listitem');
        const termTxt = term ? renderInline(kidsOf(term)).trim() : '';
        md += `- **${termTxt}**`;
        if (item) {
          for (const k of kidsOf(item)) {
            const t = tagOf(k);
            if (t === 'para' || t === 'simpara') {
              const txt = collapse(renderInline(kidsOf(k))).trim();
              if (txt) md += ' — ' + txt;
            } else if (t === '#text' || t === '#comment') continue;
            else {
              const blk = renderBlock(k);
              md += '\n' + blk.split('\n').map((l) => (l ? '  ' + l : l)).join('\n'); // 块级内容缩进进列表项
            }
          }
        }
        md += '\n';
      }
      return md + '\n';
    }
    case 'programlisting': case 'screen': {
      const role = attrsOf(n)['@_role'] || '';
      const lang = role === 'php' || role === 'php-src' ? 'php' : role || 'text';
      let code = '';
      for (const k of kids) { const kt = tagOf(k); if (kt === '#cdata' || kt === '#text') code += textOf(k); }
      return '```' + lang + '\n' + code.replace(/\n$/, '') + '\n```\n\n';
    }
    case 'example': {
      const title = findKid(n, 'title');
      const tt = title ? collapse(renderInline(kidsOf(title))).trim() : '示例';
      const rest = kids.filter((k) => tagOf(k) !== 'title');
      return `**${tt}**\n\n` + rest.map(renderBlock).join('');
    }
    case 'table': case 'informaltable': return renderTable(n);
    case 'note': case 'tip': case 'warning': case 'caution': case 'important': {
      const inner = renderMixed(kids).trimEnd();
      return inner.split('\n').map((l) => (l ? '> ' + l : '>')).join('\n') + '\n\n';
    }
    case 'blockquote':
      return '> ' + collapse(renderInline(kids)).trim() + '\n\n';
    case 'mediaobject': return ''; // 图片跳过
    case 'calloutlist': {
      let md = '';
      for (const c of kids) if (tagOf(c) === 'callout') md += '- ' + collapse(renderInline(kidsOf(c))).trim() + '\n';
      return md + '\n';
    }
    case 'methodsynopsis': case 'constructorsynopsis': case 'destructorsynopsis':
      return '```php\n' + renderSynopsis(n) + '\n```\n\n';
    case 'fieldsynopsis': {
      let line = '';
      for (const k of kids) {
        const kt = tagOf(k);
        if (kt === 'modifier') line += plainText(kidsOf(k)) + ' ';
        else if (kt === 'type') line += flattenType(k) + ' ';
        else if (kt === 'varname') line += '$' + plainText(kidsOf(k));
      }
      return '```php\n' + line.trim() + ';\n```\n\n';
    }
    case 'classsynopsis': {
      let head = 'class ';
      const lines = [];
      for (const k of kids) {
        const kt = tagOf(k);
        if (kt === 'classname') head = 'class ' + renderInline(kidsOf(k)).trim();
        else if (kt === 'extends') head += ' extends ' + renderInline(kidsOf(k)).trim();
        else if (kt === 'implements') head += ' implements ' + renderInline(kidsOf(k)).trim();
        else if (/synopsis$/.test(kt)) lines.push(renderBlock(k).trimEnd());
      }
      return '```php\n' + head + '\n```\n\n' + lines.join('\n') + '\n';
    }
    case 'classsynopsisinfo': {
      const txt = collapse(renderInline(kids)).trim();
      return txt ? '```php\n' + txt + '\n```\n\n' : '';
    }
    case 'refsect1': case 'refsect2': case 'refsect3': {
      const lvl = { refsect1: '##', refsect2: '###', refsect3: '####' }[t];
      const titleNode = findKid(n, 'title');
      let title = titleNode ? collapse(renderInline(kidsOf(titleNode))).trim() : attrsOf(n)['@_role'] || '';
      // 实体解析后的标题可能带 <title> 已被 findKid 命中；无 title 时用 role
      if (!title) title = attrsOf(n)['@_role'] || '';
      const rest = kids.filter((k) => tagOf(k) !== 'title');
      return `${lvl} ${title}\n\n` + rest.map(renderBlock).join('');
    }
    case 'sect1': case 'sect2': case 'sect3': case 'section': case 'chapter': case 'appendix': {
      const lvlMap = { sect1: '##', sect2: '###', sect3: '####', section: '##', chapter: '##', appendix: '##' };
      const titleNode = findKid(n, 'title');
      const title = titleNode ? collapse(renderInline(kidsOf(titleNode))).trim() : '';
      const rest = kids.filter((k) => tagOf(k) !== 'title');
      return `${lvlMap[t]} ${title}\n\n` + rest.map(renderBlock).join('');
    }
    case 'title': return ''; // 由父级处理
    case 'info': case 'refnamediv': case 'refsynopsisdiv': case 'bibliography': return ''; // 元信息/签名区跳过
    default: return renderInline(kids).replace(/\n{3,}/g, '\n\n') + '\n\n'; // 未知块级：行内渲染兜底，不丢内容
  }
}

// ---------- 单文件处理 ----------
function classify(rootTag, topDir) {
  if (rootTag === 'refentry') return 'function';
  if (topDir === 'reference') return 'guide';
  if (topDir === 'language') return 'syntax';
  if (topDir === 'security') return 'security';
  if (topDir === 'features') return 'guide';
  return null;
}

function processFile(xmlPath, lang, entityMap, stats) {
  let xml = fs.readFileSync(xmlPath, 'utf8');
  xml = xml.replace(/<!DOCTYPE[\s\S]*?>/g, '');
  xml = xml.replace(/<\?phpdoc[^>]*\?>/g, '');
  xml = resolveEntities(xml, entityMap, stats);
  let doc;
  try { doc = parser.parse(xml); } catch (e) { stats.parseFail.push(xmlPath); return null; }
  if (!Array.isArray(doc) || !doc.length) { stats.parseFail.push(xmlPath); return null; }
  const root = doc.find((n) => { const k = tagOf(n); return k !== '#text' && k !== '#comment'; });
  if (!root) return null;
  const rootTag = tagOf(root);
  const topDir = path.relative(LANGS[lang], xmlPath).split(path.sep)[0];
  if (topDir === 'language' && rootTag === 'chapter') { /* 语言参考的章文件跳过（内容在 sect1 小节里） */ }
  const category = classify(rootTag, topDir);
  if (!category) return null;

  const xmlId = attrsOf(root)['@_xml:id'] || '';
  if (!xmlId) return null;

  let name = '', title = '', aliases = [], signature = '', body = '';
  if (rootTag === 'refentry') {
    const namediv = findKid(root, 'refnamediv');
    if (namediv) {
      const refs = kidsOf(namediv).filter((k) => tagOf(k) === 'refname');
      for (const r of refs) { const nm = collapse(renderInline(kidsOf(r))).trim(); if (nm) { if (!name) name = nm; else aliases.push(nm); } }
      const purpose = findKid(namediv, 'refpurpose');
      if (purpose) title = collapse(renderInline(kidsOf(purpose))).trim();
    }
    if (!name) return null;
    // 签名：refsynopsisdiv 优先，其次 description 里的第一个 methodsynopsis
    const synDiv = findKid(root, 'refsynopsisdiv');
    const synNode = (synDiv && kidsOf(synDiv).find((k) => /synopsis$/.test(tagOf(k)))) ||
      (() => { const d = kidsOf(root).find((k) => tagOf(k) === 'refsect1' && (attrsOf(k)['@_role'] === 'description'));
               return d ? kidsOf(d).find((k) => /synopsis$/.test(tagOf(k))) : null; })();
    if (synNode) signature = renderSynopsis(synNode);
    body = kidsOf(root).filter((k) => !['refnamediv', 'refsynopsisdiv', 'info'].includes(tagOf(k))).map(renderBlock).join('');
  } else {
    const titleNode = findKid(root, 'title');
    title = titleNode ? collapse(renderInline(kidsOf(titleNode))).trim() : xmlId;
    name = xmlId;
    body = kidsOf(root).filter((k) => tagOf(k) !== 'title').map(renderBlock).join('');
  }
  if (!body.trim()) { stats.empty++; return null; }

  // xml:id 是官方手册页唯一 ID（如 function.strip-tags / mysqli.query），用它避免
  // "mysqli::query" 与过程式别名 "mysqli_query" 这类 slug 撞名
  const slug = xmlId.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || name.toLowerCase();
  const fm = {
    id: `${lang}-php-${category}-${slug}`,
    language: 'php',
    lang,
    category,
    name,
    ...(aliases.length ? { aliases } : {}),
    title: stripLeftover(title),
    ...(signature ? { signature: stripLeftover(signature) } : {}),
    module: topDir === 'reference' ? path.relative(LANGS[lang], xmlPath).split(path.sep)[1] : topDir,
    source_url: `https://www.php.net/manual/${lang}/${xmlId}.php`,
    license: LICENSE,
    updated: UPDATED,
  };
  const yaml = Object.entries(fm).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join('\n');
  return {
    fm,
    md: `---\n${yaml}\n---\n\n# ${stripLeftover(title || name)}\n\n${stripLeftover(body).trim()}\n`,
  };
}

// ---------- 主流程：zh 优先合并 ----------
function walkXml(dir) {
  const files = [];
  if (!fs.existsSync(dir)) return files;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...walkXml(p));
    else if (e.name.endsWith('.xml')) files.push(p);
  }
  return files;
}

const stats = { unresolved: new Set(), parseFail: [], empty: 0, byLang: { zh: 0, en: 0 } };
const entityMaps = {};
for (const lang of Object.keys(LANGS)) {
  const m = loadEntities(LANGS[lang]);
  for (const [k, v] of builtinMap(lang)) if (!m.has(k)) m.set(k, v);
  entityMaps[lang] = m;
}
const LEFTOVER_ENT = /&[A-Za-z][A-Za-z0-9._-]*;/g;
const stripLeftover = (s) => s.replace(LEFTOVER_ENT, '');

const byPath = new Map(); // relPath → {lang, abs}
for (const [lang, base] of Object.entries(LANGS)) {
  for (const d of TOP_DIRS) {
    for (const f of walkXml(path.join(base, d))) {
      const rel = path.relative(base, f).split(path.sep).join('/');
      const prev = byPath.get(rel);
      if (!prev || lang === 'zh') byPath.set(rel, { lang, abs: f }); // zh 优先
    }
  }
}

fs.rmSync(OUT, { recursive: true, force: true });
for (const [rel, { lang, abs }] of byPath) {
  const res = processFile(abs, lang, entityMaps[lang], stats);
  if (!res) continue;
  const outPath = path.join(OUT, lang, rel.replace(/\.xml$/, '.md'));
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, res.md, 'utf8');
  stats.byLang[lang]++;
}

console.log('生成完成:', stats.byLang, '空文件跳过:', stats.empty, '解析失败:', stats.parseFail.length);
if (stats.parseFail.length) console.log('失败样例:', stats.parseFail.slice(0, 5));
console.log('未解析实体数:', stats.unresolved.size, [...stats.unresolved].slice(0, 10));
