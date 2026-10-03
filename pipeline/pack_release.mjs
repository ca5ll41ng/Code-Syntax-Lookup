// pipeline/pack_release.mjs — 组装 Electron 打包所需的 release-data 目录
// 内容：knowledge.db（检索库）、site/（静态站点）、models/（嵌入模型）、llms.txt
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'release-data');

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

// 1) 检索库
fs.copyFileSync(path.join(ROOT, 'knowledge.db'), path.join(OUT, 'knowledge.db'));

// 2) 静态站点
fs.cpSync(path.join(ROOT, 'docs-site', 'dist'), path.join(OUT, 'docs-site', 'dist'), { recursive: true });

// 3) 嵌入模型
if (fs.existsSync(path.join(ROOT, '.models'))) {
  fs.cpSync(path.join(ROOT, '.models'), path.join(OUT, 'models'), { recursive: true });
}

// 4) llms 索引
for (const lang of fs.readdirSync(path.join(ROOT, 'corpus')).filter((d) => fs.statSync(path.join(ROOT, 'corpus', d)).isDirectory())) {
  for (const f of ['llms.txt', 'llms-full.txt']) {
    const s = path.join(ROOT, 'corpus', lang, f);
    if (fs.existsSync(s)) {
      fs.mkdirSync(path.join(OUT, 'corpus', lang), { recursive: true });
      fs.copyFileSync(s, path.join(OUT, 'corpus', lang, f));
    }
  }
}

const size = (dir) => {
  let t = 0;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    t += e.isDirectory() ? size(p) : e.size ?? fs.statSync(p).size;
  }
  return t;
};
console.log(`release-data 就绪: ${(size(OUT) / 1024 / 1024).toFixed(0)} MB → ${OUT}`);
