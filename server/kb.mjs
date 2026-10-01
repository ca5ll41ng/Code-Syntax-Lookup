// server/kb.mjs — 知识库查询层（MCP server 与本地 CLI 共用）
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DatabaseSync } from 'node:sqlite';
import { bigram, dangerList } from '../pipeline/index.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
let _db = null;
export function openKb() {
  if (!_db) _db = new DatabaseSync(path.join(ROOT, 'knowledge.db'), { readOnly: true });
  return _db;
}

function toFtsQuery(text) {
  return bigram(text).split(/\s+/).filter(Boolean).map((w) => '"' + w.replace(/"/g, '""') + '"').join(' ');
}

// ---------- 向量层（M4）：懒加载嵌入模型，查询侧余弦相似度，暴力扫描 ----------
const EMBED_MODEL = 'Xenova/multilingual-e5-small';
const MODELS_DIR = path.join(ROOT, '.models');
let _embedder = null;

async function getEmbedder() {
  if (!_embedder) {
    const { pipeline } = await import('@huggingface/transformers');
    _embedder = await pipeline('feature-extraction', EMBED_MODEL, { dtype: 'q8', cache_dir: MODELS_DIR });
  }
  return _embedder;
}

async function embedQuery(q) {
  const ex = await getEmbedder();
  const out = await ex(['query: ' + q], { pooling: 'cls', normalize: true });
  const [n, dim] = out.dims;
  return new Float32Array(out.data.buffer, out.data.byteOffset, dim);
}

export function vectorEnabled() {
  try {
    return openKb().prepare('SELECT COUNT(*) c FROM doc_vectors').get().c > 0;
  } catch {
    return false;
  }
}

function vectorSearchSync(qv, language, limit) {
  const db = openKb();
  const rows = db.prepare(
    `SELECT d.id, d.name, d.title, d.signature, d.category, d.danger_type, d.cwe, d.source_url, d.lang, v.embedding
     FROM doc_vectors v JOIN docs d ON d.id = v.doc_id
     WHERE d.language = ? OR d.language = 'multi'`
  ).all(language);
  const scored = [];
  for (const r of rows) {
    const v = new Float32Array(r.embedding.buffer, r.embedding.byteOffset, qv.length);
    let dot = 0;
    for (let k = 0; k < qv.length; k++) dot += qv[k] * v[k];
    scored.push({ ...r, vscore: dot, score: 0 });
  }
  scored.sort((a, b) => b.vscore - a.vscore);
  return scored.slice(0, limit);
}

// 检索：精确名命中 + FTS 全文（中文 bigram）+ 向量语义（RRF 融合），zh 优先
export async function searchSyntax({ language = 'php', query = '', category, danger, lang, limit = 10 } = {}) {
  const db = openKb();
  const limitN = Math.min(Math.max(1, limit | 0 || 10), 50);
  const conds = ["(d.language = ? OR d.language = 'multi')"];
  const args = [language];
  if (category) { conds.push('d.category = ?'); args.push(category); }
  if (danger) { conds.push('d.danger_type = ?'); args.push(danger); }
  if (lang && lang !== 'all') { conds.push('d.lang = ?'); args.push(lang); }
  const where = conds.join(' AND ');
  const hits = new Map();

  if (query) {
    const exact = db.prepare(
      `SELECT id, name, title, signature, category, danger_type, cwe, source_url, lang, 0 AS score
       FROM docs d WHERE ${where} AND lower(d.name) = lower(?) LIMIT ?`).all(...args, query.trim(), limitN);
    for (const r of exact) hits.set(r.id, { ...r, score: 100 });
    const aliases = db.prepare(
      `SELECT id, name, title, signature, category, danger_type, cwe, source_url, lang
       FROM docs d WHERE ${where} AND aliases LIKE ? LIMIT ?`).all(...args, '%"'+query.trim().toLowerCase()+'"%', limitN);
    for (const r of aliases) if (!hits.has(r.id)) hits.set(r.id, { ...r, score: 90 });
  }

  if (query) {
    const q = toFtsQuery(query);
    if (q) {
      const rows = db.prepare(
        `SELECT d.id, d.name, d.title, d.signature, d.category, d.danger_type, d.cwe, d.source_url, d.lang,
                -bm25(docs_fts, 8.0, 4.0, 1.0) AS score,
                snippet(docs_fts, 3, '', '', ' … ', 24) AS snip
         FROM docs_fts f JOIN docs d ON d.id = f.id
         WHERE docs_fts MATCH ? AND ${where}
         ORDER BY score DESC LIMIT ?`).all(q, ...args, limitN * 3);
      for (const r of rows) {
        if (hits.has(r.id)) { hits.get(r.id).snip ||= r.snip; continue; }
        hits.set(r.id, r);
      }
    }
  }

  // 向量语义召回（RRF 融合；向量索引为空或未命中时自动退化为 FTS）
  if (query && vectorEnabled()) {
    try {
      const qv = await embedQuery(query);
      const vrows = vectorSearchSync(qv, language, limitN * 4);
      vrows.forEach((r, rank) => {
        const rrf = 1 / (60 + rank + 1);
        if (hits.has(r.id)) hits.get(r.id).score += rrf;
        else hits.set(r.id, { ...r, score: rrf });
      });
    } catch (e) {
      // 模型加载失败（如首次下载无网络）：静默退化为 FTS
    }
  } else if (!query) {
    const rows = db.prepare(
      `SELECT id, name, title, signature, category, danger_type, cwe, source_url, lang
       FROM docs d WHERE ${where} LIMIT ?`).all(...args, limitN);
    for (const r of rows) hits.set(r.id, { ...r, score: 0 });
  }

  return [...hits.values()]
    .sort((a, b) => (b.score - a.score) || (a.lang === 'zh' ? -1 : 1) - (b.lang === 'zh' ? -1 : 1))
    .slice(0, limitN)
    .map(({ id, score, snip, vscore, ...r }) => ({ ...r, ...(snip ? { snippet: snip } : {}) }));
}

export function getEntry({ language = 'php', name } = {}) {
  const db = openKb();
  const q = String(name || '').toLowerCase();
  const row = db.prepare(
    `SELECT * FROM docs WHERE language = ? AND (
       lower(name) = ?
       OR lower(substr(module, instr(module, '/') + 1) || '.' || name) = ?
       OR (aliases IS NOT NULL AND instr(lower(aliases), '"' || ? || '"') > 0)
     )
     ORDER BY CASE lang WHEN 'zh' THEN 0 ELSE 1 END LIMIT 1`
  ).get(language, q, q, q);
  if (!row) return null;
  const dangers = dangerList(safeJson(row.danger));
  return { ...row, danger: dangers.length ? dangers : undefined, content: row.content, danger_json: undefined };
}

export function listDangerous({ language = 'php', cwe, type, limit = 50 } = {}) {
  const db = openKb();
  const conds = ['language = ?', 'danger_type IS NOT NULL'];
  const args = [language];
  if (type) { conds.push('danger_type = ?'); args.push(type); }
  if (cwe) { conds.push('cwe LIKE ?'); args.push('%' + cwe + '%'); }
  return db.prepare(
    `SELECT name, title, danger_type, cwe, signature, source_url, lang FROM docs
     WHERE ${conds.join(' AND ')}
     ORDER BY danger_type, name LIMIT ?`).all(...args, Math.min(limit, 200));
}

export function kbStats() {
  const db = openKb();
  const total = db.prepare('SELECT COUNT(*) c FROM docs').get().c;
  const byLang = db.prepare('SELECT lang, COUNT(*) c FROM docs GROUP BY lang').all();
  const byCat = db.prepare('SELECT category, COUNT(*) c FROM docs GROUP BY category').all();
  const danger = db.prepare('SELECT danger_type, COUNT(*) c FROM docs WHERE danger_type IS NOT NULL GROUP BY danger_type').all();
  return { total, byLang, byCategory: byCat, danger };
}

function safeJson(s) { try { return JSON.parse(s); } catch { return undefined; } }
