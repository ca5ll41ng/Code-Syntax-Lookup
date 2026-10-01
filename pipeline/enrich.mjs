// pipeline/enrich.mjs — 把各语言审计工具的污点/危险函数数据注入语料 frontmatter
// php   ← designsecurity/progpilot（sources/sinks/sanitizers/validators JSON，MIT）
// python ← PyCQA/bandit（blacklists/calls.py + imports.py 的 build_conf_dict 调用，Apache-2.0）
// 匹配键：frontmatter 的 name + aliases + module 限定名（小写）；只重写命中的文件
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const RAW = path.join(ROOT, 'raw');
const CORPUS = path.join(ROOT, 'corpus');

const normCwe = (c) => (typeof c === 'string' ? c.replace(/^CWE_?/i, 'CWE-').replace(/^CWE-?(\d+)/i, 'CWE-$1') : c);

// ---------- php：progpilot ----------
function progpilotProvider() {
  const DATA = path.join(RAW, 'progpilot', 'package', 'src', 'uptodate_data', 'php');
  const FILES = { sink: 'sinks.json', source: 'sources.json', sanitizer: 'sanitizers.json', validator: 'validators.json' };
  const map = new Map();
  for (const [type, file] of Object.entries(FILES)) {
    const p = path.join(DATA, file);
    if (!fs.existsSync(p)) continue;
    const json = JSON.parse(fs.readFileSync(p, 'utf8'));
    const list = json[Object.keys(json)[0]] || [];
    for (const rec of list) {
      if (!rec.name) continue;
      const key = String(rec.name).toLowerCase();
      const entry = {
        type,
        ...(rec.attack ? { attack: rec.attack } : {}),
        ...(rec.cwe ? { cwe: normCwe(rec.cwe) } : {}),
        ...(Array.isArray(rec.parameters) && rec.parameters.length ? { params: rec.parameters.map((x) => x.id ?? x) } : {}),
      };
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(entry);
    }
  }
  return map;
}

// ---------- python：bandit ----------
function parsePyStringArgs(argText) {
  // 按顶层逗号切分参数（忽略字符串/括号内逗号）
  const args = [];
  let depth = 0, inStr = null, cur = '';
  for (let i = 0; i < argText.length; i++) {
    const ch = argText[i];
    if (inStr) {
      if (ch === '\\') { cur += ch + (argText[i + 1] ?? ''); i += 1; continue; }
      if (ch === inStr) inStr = null;
      cur += ch;
      continue;
    }
    if (ch === "'" || ch === '"') { inStr = ch; cur += ch; continue; }
    if (ch === '[' || ch === '(') { depth += 1; cur += ch; continue; }
    if (ch === ']' || ch === ')') { depth -= 1; cur += ch; continue; }
    if (ch === ',' && depth === 0) { args.push(cur.trim()); cur = ''; continue; }
    cur += ch;
  }
  if (cur.trim()) args.push(cur.trim());
  return args;
}

function parseStr(lit) {
  // Python 源码里相邻字符串字面量是隐式拼接的（跨行 message），全部提取后连接
  const parts = [...lit.matchAll(/'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"/g)].map((m) =>
    (m[1] ?? m[2]).replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\n/g, '\n').replace(/\\t/g, '\t').replace(/\\\\/g, '\\'),
  );
  return parts.join('');
}

function banditProvider() {
  // CWE 常量表：bandit/core/issue.py
  const cweMap = new Map();
  const issueSrc = fs.readFileSync(path.join(RAW, 'bandit', 'bandit', 'core', 'issue.py'), 'utf8');
  for (const m of issueSrc.matchAll(/^\s+([A-Z][A-Z0-9_]+)\s*=\s*\(?\s*(\d+)/gm)) cweMap.set(m[1], m[2]);

  const map = new Map();
  const add = (bid, cwes, qualnames, message, level) => {
    const entry = {
      type: 'sink',
      ...(bid ? { attack: bid } : {}),
      ...(cwes.length ? { cwe: cwes } : {}),
      ...(message ? { note: message } : {}),
      level,
    };
    for (const q of qualnames) {
      const key = q.toLowerCase();
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(entry);
    }
  };

  for (const file of ['calls.py', 'imports.py']) {
    const src = fs.readFileSync(path.join(RAW, 'bandit', 'bandit', 'blacklists', file), 'utf8').replace(/\r\n/g, '\n');
    // 逐个扫描 build_conf_dict( ... ) 调用（括号配平）
    const callRe = /utils\.build_conf_dict\(/g;
    let m;
    while ((m = callRe.exec(src))) {
      let i = m.index + m[0].length, depth = 1;
      while (i < src.length && depth > 0) {
        const ch = src[i];
        if (ch === '(') depth += 1;
        else if (ch === ')') depth -= 1;
        i += 1;
      }
      const argText = src.slice(m.index + m[0].length, i - 1);
      const args = parsePyStringArgs(argText);
      const name = args[0] ? parseStr(args[0]) : '';
      const bid = args[1] ? parseStr(args[1]) : '';
      // cwe：issue.Cwe.X 或 [issue.Cwe.X, ...]
      const cwes = [];
      const cweArg = args[2] || '';
      for (const cm of cweArg.matchAll(/Cwe\.([A-Z0-9_]+)/g)) {
        const num = cweMap.get(cm[1]);
        if (num) cwes.push('CWE-' + num);
      }
      const qualnames = [];
      const qArg = args[3] || '';
      for (const qm of qArg.matchAll(/['"]([^'"]+)['"]/g)) qualnames.push(qm[1]);
      const message = args[4] ? parseStr(args[4]) : '';
      const level = args[5] ? parseStr(args[5]) : 'MEDIUM';
      add(bid, cwes, qualnames, message, level);
    }
  }
  return map;
}

const PROVIDERS = {
  php: progpilotProvider,
  python: banditProvider,
};

// ---------- 合并同名多条记录 ----------
function buildDanger(records) {
  const byType = new Map();
  for (const r of records) {
    if (!byType.has(r.type)) byType.set(r.type, { type: r.type, attack: new Set(), cwe: new Set(), params: new Set(), note: new Set() });
    const g = byType.get(r.type);
    if (r.attack) g.attack.add(r.attack);
    for (const c of [].concat(r.cwe || [])) g.cwe.add(c); // 展平：cwe 可能是数组
    for (const p of [].concat(r.params || [])) g.params.add(p);
    if (r.note) g.note.add(r.note);
  }
  const groups = [...byType.values()].map((g) => ({
    type: g.type,
    ...(g.attack.size ? { attack: [...g.attack] } : {}),
    ...(g.cwe.size ? { cwe: [...g.cwe] } : {}),
    ...(g.params.size ? { params: [...g.params] } : {}),
    ...(g.note.size ? { note: [...g.note][0] } : {}),
  }));
  return groups.length === 1 ? groups[0] : groups;
}

// ---------- frontmatter 解析/序列化 ----------
function parseFrontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) return null;
  const fm = {};
  const order = [];
  for (const line of m[1].split('\n')) {
    const km = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (!km) continue;
    try { fm[km[1]] = JSON.parse(km[2]); } catch { fm[km[1]] = km[2]; }
    order.push(km[1]);
  }
  return { fm, order, body: text.slice(m[0].length) };
}

function serializeFrontmatter(fm, order) {
  const lines = order.map((k) => `${k}: ${JSON.stringify(fm[k])}`);
  return `---\n${lines.join('\n')}\n---\n`;
}

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

// ---------- 主流程：按语言套用 provider ----------
let totalMatched = 0;
const totalByType = {};
for (const [language, provider] of Object.entries(PROVIDERS)) {
  const dangerMap = provider();
  let matched = 0;
  const byType = {};
  for (const langDir of ['zh', 'en']) {
    for (const file of walkMd(path.join(CORPUS, language, langDir))) {
      const text = fs.readFileSync(file, 'utf8');
      const parsed = parseFrontmatter(text);
      if (!parsed) continue;
      const { fm, order, body } = parsed;
      const candidates = [String(fm.name || '').toLowerCase()];
      if (Array.isArray(fm.aliases)) for (const a of fm.aliases) candidates.push(String(a).toLowerCase());
      if (fm.module && candidates[0] && !candidates[0].includes('.')) candidates.push(`${fm.module}.${candidates[0]}`.toLowerCase());
      const records = [];
      for (const c of candidates) if (dangerMap.has(c)) records.push(...dangerMap.get(c));
      if (!records.length) continue;

      fm.danger = buildDanger(records);
      const newOrder = order.filter((k) => k !== 'danger');
      const catIdx = newOrder.indexOf('category');
      newOrder.splice(catIdx >= 0 ? catIdx + 1 : newOrder.length, 0, 'danger');
      fs.writeFileSync(file, serializeFrontmatter(fm, newOrder) + body, 'utf8');
      matched += 1;
      const types = Array.isArray(fm.danger) ? fm.danger.map((d) => d.type) : [fm.danger.type];
      for (const t of types) { byType[t] = (byType[t] || 0) + 1; totalByType[t] = (totalByType[t] || 0) + 1; }
    }
  }
  console.log(`${language}: 命中 ${matched} 条（${JSON.stringify(byType)}），provider 名称数 ${dangerMap.size}`);
  totalMatched += matched;
}
console.log(`danger 标注完成: 共命中 ${totalMatched} 条, 分布:`, totalByType);
