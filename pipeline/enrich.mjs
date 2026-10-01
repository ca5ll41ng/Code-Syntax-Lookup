// pipeline/enrich.mjs
// 用 progpilot 的污点数据（sources/sinks/sanitizers/validators）给语料条目注入 danger 标注
// 匹配键：frontmatter 的 name + aliases（小写）；只重写命中的文件
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA = path.join(ROOT, 'raw', 'progpilot', 'package', 'src', 'uptodate_data', 'php');
const CORPUS = path.join(ROOT, 'corpus', 'php');
const FILES = { sink: 'sinks.json', source: 'sources.json', sanitizer: 'sanitizers.json', validator: 'validators.json' };

const normCwe = (c) => (typeof c === 'string' ? c.replace(/^CWE_?/i, 'CWE-').replace(/^CWE-?(\d+)/i, 'CWE-$1') : c);

// name(lower) → [{type, attack, cwe, params}]
const dangerMap = new Map();
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
    if (!dangerMap.has(key)) dangerMap.set(key, []);
    dangerMap.get(key).push(entry);
  }
}

// 合并同名多条记录：按 type 分组聚合 attack/cwe/params
function buildDanger(records) {
  const byType = new Map();
  for (const r of records) {
    if (!byType.has(r.type)) byType.set(r.type, { type: r.type, attack: new Set(), cwe: new Set(), params: new Set() });
    const g = byType.get(r.type);
    if (r.attack) g.attack.add(r.attack);
    if (r.cwe) g.cwe.add(r.cwe);
    for (const p of r.params || []) g.params.add(p);
  }
  const groups = [...byType.values()].map((g) => ({
    type: g.type,
    ...(g.attack.size ? { attack: [...g.attack] } : {}),
    ...(g.cwe.size ? { cwe: [...g.cwe] } : {}),
    ...(g.params.size ? { params: [...g.params] } : {}),
  }));
  return groups.length === 1 ? groups[0] : groups;
}

// ---- frontmatter 解析/序列化（格式由 php_adapter 生成，key: JSON 值） ----
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

let matched = 0;
const byTypeCount = {};
for (const lang of ['zh', 'en']) {
  for (const file of walkMd(path.join(CORPUS, lang))) {
    const text = fs.readFileSync(file, 'utf8');
    const parsed = parseFrontmatter(text);
    if (!parsed) continue;
    const { fm, order, body } = parsed;
    const names = [String(fm.name || '').toLowerCase(), ...(Array.isArray(fm.aliases) ? fm.aliases.map((a) => String(a).toLowerCase()) : [])];
    const records = [];
    for (const n of names) { if (n && dangerMap.has(n)) records.push(...dangerMap.get(n)); }
    if (!records.length) continue;

    fm.danger = buildDanger(records);
    const newOrder = order.filter((k) => k !== 'danger');
    const catIdx = newOrder.indexOf('category');
    newOrder.splice(catIdx >= 0 ? catIdx + 1 : newOrder.length, 0, 'danger');

    fs.writeFileSync(file, serializeFrontmatter(fm, newOrder) + body, 'utf8');
    matched++;
    const types = Array.isArray(fm.danger) ? fm.danger.map((d) => d.type) : [fm.danger.type];
    for (const t of types) byTypeCount[t] = (byTypeCount[t] || 0) + 1;
  }
}

console.log(`danger 标注完成: 命中 ${matched} 个条目, 分布:`, byTypeCount, `| progpilot 名称数: ${dangerMap.size}`);
