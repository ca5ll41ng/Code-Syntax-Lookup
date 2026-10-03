// pipeline/index.mjs
// corpus/**/*.md → knowledge.db（SQLite：docs 表 + docs_fts 全文索引）
// 中文检索：CJK 二元分词（bigram）+ unicode61 分词器，入索引与查询两侧做同样变换
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DatabaseSync } from 'node:sqlite';
import { isSea } from 'node:sea';

const HERE = typeof __filename === 'string' ? path.dirname(__filename) : path.dirname(fileURLToPath(import.meta.url));
const ROOT = isSea() ? path.dirname(process.execPath) : path.resolve(HERE, '..');
const CORPUS = path.join(ROOT, 'corpus');
const DB_PATH = path.join(ROOT, 'knowledge.db');

// CJK 段 → 重叠二元组（"文件上传" → "文件 件上 上传"），非 CJK 原样
const CJK_RE = /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/;
export function bigram(text) {
  let out = '';
  let cjk = [];
  const flush = () => {
    if (cjk.length === 1) out += ' ' + cjk[0] + ' ';
    else for (let i = 0; i + 1 < cjk.length; i++) out += ' ' + cjk[i] + cjk[i + 1] + ' ';
    cjk = [];
  };
  for (const ch of String(text)) {
    if (CJK_RE.test(ch)) cjk.push(ch);
    else { flush(); out += ch; }
  }
  flush();
  return out;
}

export function parseFrontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) return null;
  const fm = {};
  for (const line of m[1].split('\n')) {
    const km = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (!km) continue;
    try { fm[km[1]] = JSON.parse(km[2]); } catch { fm[km[1]] = km[2]; }
  }
  return { fm, body: text.slice(m[0].length) };
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

// danger 归一化：{type,...} 或 [{...}] → [{...}]
export function dangerList(d) {
  if (!d) return [];
  return Array.isArray(d) ? d : [d];
}

// ---------- 建库 ----------
const IS_MAIN = !isSea() && !!process.argv[1] && process.argv[1].endsWith('index.mjs');
if (IS_MAIN) {
  fs.rmSync(DB_PATH, { force: true });
  const db = new DatabaseSync(DB_PATH);
  db.exec('PRAGMA journal_mode = OFF;');
  db.exec(`
    CREATE TABLE docs (
      id TEXT PRIMARY KEY,
      language TEXT NOT NULL,
      lang TEXT,
      category TEXT NOT NULL,
      name TEXT NOT NULL,
      aliases TEXT,
      title TEXT,
      signature TEXT,
      module TEXT,
      content TEXT,
      danger TEXT,
      danger_type TEXT,
      cwe TEXT,
      source_url TEXT,
      license TEXT,
      updated TEXT
    );
    CREATE INDEX idx_docs_lang_cat ON docs(language, category);
    CREATE INDEX idx_docs_name ON docs(name);
    CREATE INDEX idx_docs_danger ON docs(language, danger_type);
    CREATE VIRTUAL TABLE docs_fts USING fts5(
      id UNINDEXED, name, title, content,
      tokenize = 'unicode61'
    );
  `);

  const insDoc = db.prepare(`INSERT INTO docs (id, language, lang, category, name, aliases, title, signature, module, content, danger, danger_type, cwe, source_url, license, updated)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);
  const insFts = db.prepare('INSERT INTO docs_fts (id, name, title, content) VALUES (?, ?, ?, ?)');

  const files = walkMd(CORPUS);
  let n = 0, dangerN = 0;
  db.exec('BEGIN');
  for (const f of files) {
    const parsed = parseFrontmatter(fs.readFileSync(f, 'utf8'));
    if (!parsed || !parsed.fm.id || !parsed.fm.name) continue;
    const { fm, body } = parsed;
    const dangers = dangerList(fm.danger);
    const dangerType = dangers.length ? dangers[0].type : null;
    const cwes = [...new Set(dangers.flatMap((d) => d.cwe || []))].join(',');
    insDoc.run(
      fm.id, fm.language || 'php', fm.lang || null, fm.category || 'guide', fm.name,
      fm.aliases ? JSON.stringify(fm.aliases) : null,
      fm.title || null, fm.signature || null, fm.module || null,
      body.trim(), dangers.length ? JSON.stringify(dangers) : null,
      dangerType, cwes || null, fm.source_url || null, fm.license || null, fm.updated || null,
    );
    insFts.run(fm.id, bigram(fm.name), bigram(fm.title || ''), bigram(body));
    n++;
    if (dangerType) dangerN++;
  }
  db.exec('COMMIT');

  const cats = db.prepare('SELECT category, lang, COUNT(*) c FROM docs GROUP BY category, lang ORDER BY c DESC').all();
  console.log(`入库完成: ${n} 条 (danger ${dangerN}), 数据库: ${DB_PATH}`);
  for (const r of cats) console.log(`  ${r.category}/${r.lang}: ${r.c}`);
  db.close();
}
