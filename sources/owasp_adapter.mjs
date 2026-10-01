// sources/owasp_adapter.mjs
// OWASP CheatSheetSeries（CC BY-SA 4.0，Markdown）→ corpus/multi/owasp/*.md
// language=multi：跨语言安全知识，任意语言的检索都能命中
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'raw', 'owasp-cheatsheets', 'cheatsheets');
const OUT = path.join(ROOT, 'corpus', 'multi', 'owasp');
const UPDATED = new Date().toISOString().slice(0, 10);

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

let n = 0;
for (const f of fs.readdirSync(SRC)) {
  if (!f.endsWith('.md')) continue;
  const raw = fs.readFileSync(path.join(SRC, f), 'utf8');
  const name = f.replace(/\.md$/, '').replace(/_Cheat_Sheet$/, '').replace(/_/g, ' ');
  const fm = {
    id: `multi-en-security-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    language: 'multi',
    lang: 'en',
    category: 'security',
    name,
    title: name,
    module: 'owasp-cheat-sheet-series',
    source_url: `https://cheatsheetseries.owasp.org/cheatsheets/${f}`,
    license: 'CC-BY-SA-4.0',
    updated: UPDATED,
  };
  const yaml = Object.entries(fm).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join('\n');
  fs.writeFileSync(path.join(OUT, f), `---\n${yaml}\n---\n\n${raw.trim()}\n`, 'utf8');
  n += 1;
}
console.log('OWASP 语料生成完成:', n, '个 cheat sheet');
