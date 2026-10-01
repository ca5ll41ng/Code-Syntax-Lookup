// pipeline/embed.mjs — 语料向量化入库（M4 向量层）
// 模型：Xenova/multilingual-e5-small（多语言，384 维，中文提问可命中英文语料）
// 存储：knowledge.db 的 doc_vectors 表（doc_id → Float32Array BLOB），查询侧暴力余弦
// 范围：默认嵌入 危险标注 + security + multi 条目（约 500 条）；--all 全量；--limit N 截断
// 用法：node pipeline/embed.mjs [--all] [--limit N] [--model <hf-id>]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DatabaseSync } from 'node:sqlite';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DB_PATH = path.join(ROOT, 'knowledge.db');
const MODEL = process.env.EMBED_MODEL || 'Xenova/multilingual-e5-small';
const MODELS_DIR = path.join(ROOT, '.models');
const args = process.argv.slice(2);
const EMBED_ALL = args.includes('--all');
const limitArg = args.indexOf('--limit');
const LIMIT = limitArg >= 0 ? parseInt(args[limitArg + 1], 10) : 0;

const { pipeline } = await import('@huggingface/transformers');
const extractor = await pipeline('feature-extraction', MODEL, { dtype: 'q8', cache_dir: MODELS_DIR });

async function embed(texts, prefix) {
  const out = await extractor(texts.map((t) => prefix + t), { pooling: 'cls', normalize: true });
  const [n, dim] = out.dims;
  const vectors = [];
  for (let i = 0; i < n; i++) vectors.push(new Float32Array(out.data.buffer, out.data.byteOffset + i * dim * 4, dim));
  return vectors;
}

const db = new DatabaseSync(DB_PATH);
db.exec(`
  CREATE TABLE IF NOT EXISTS doc_vectors (
    doc_id TEXT PRIMARY KEY,
    model TEXT,
    embedding BLOB
  );
  CREATE TABLE IF NOT EXISTS meta (key TEXT PRIMARY KEY, value TEXT);
`);

const where = EMBED_ALL ? '' : `WHERE (danger IS NOT NULL OR category = 'security' OR language = 'multi')`;
const rows = db.prepare(`SELECT id, name, title, signature, content FROM docs ${where}`).all();
const targets = LIMIT > 0 ? rows.slice(0, LIMIT) : rows;
console.log(`待向量化: ${targets.length} / ${rows.length} 条（模型 ${MODEL}）`);

const del = db.prepare('DELETE FROM doc_vectors WHERE doc_id = ?');
const ins = db.prepare('INSERT INTO doc_vectors (doc_id, model, embedding) VALUES (?, ?, ?)');
const clean = (s) => String(s || '').replace(/```[\s\S]*?```/g, ' ').replace(/[#*`>|]/g, ' ').replace(/\s+/g, ' ').trim();

db.exec('BEGIN');
let done = 0;
const BATCH = 16;
for (let start = 0; start < targets.length; start += BATCH) {
  const batch = targets.slice(start, start + BATCH);
  const texts = batch.map((r) => (`${r.name} — ${r.title || ''}\n${r.signature || ''}\n` + clean(r.content)).slice(0, 700));
  const vectors = await embed(texts, 'passage: ');
  for (let i = 0; i < batch.length; i++) {
    del.run(batch[i].id);
    ins.run(batch[i].id, MODEL, Buffer.from(vectors[i].buffer));
    done += 1;
  }
  process.stdout.write(`\r${done}/${targets.length}`);
}
db.prepare(`INSERT OR REPLACE INTO meta (key, value) VALUES (?, ?)`).run('embed_model', MODEL);
db.prepare(`INSERT OR REPLACE INTO meta (key, value) VALUES (?, ?)`).run('embed_at', new Date().toISOString());
db.exec('COMMIT');
console.log(`\n向量化完成: ${done} 条入库`);
db.close();
