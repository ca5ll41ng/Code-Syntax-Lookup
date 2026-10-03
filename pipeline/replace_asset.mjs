// pipeline/replace_asset.mjs — 临时脚本：替换 Release 资产（删旧传新，幂等）
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const REPO = 'ca5ll41ng/Code-Syntax-Lookup';
const RELEASE_ID = '402396912';
const ASSET_NAME = 'CodeSyntaxLookup-Setup-1.0.0.exe';
const FILE = path.join(ROOT, 'dist', ASSET_NAME);

const token = execSync('git credential fill', { input: 'protocol=https\nhost=github.com\n\n' })
  .toString()
  .split('\n')
  .find((l) => l.startsWith('password='))
  ?.slice(9);
if (!token) {
  console.error('未取到凭据');
  process.exit(1);
}
const H = { Authorization: `token ${token}`, 'Accept': 'application/vnd.github+json' };

// 1) 找到目标资产 ID
const res = await fetch(`https://api.github.com/repos/${REPO}/releases/${RELEASE_ID}/assets`, { headers: H });
const assets = await res.json();
const old = assets.find((a) => a.name === ASSET_NAME);
if (old) {
  const d = await fetch(`https://api.github.com/repos/${REPO}/releases/assets/${old.id}`, { method: 'DELETE', headers: H });
  console.log(`删除旧资产 ${old.id}: HTTP ${d.status}`);
}

// 2) 上传新包
if (!fs.existsSync(FILE)) {
  console.error('本地安装包不存在:', FILE);
  process.exit(1);
}
const size = fs.statSync(FILE).size;
console.log(`上传 ${ASSET_NAME}（${(size / 1024 / 1024).toFixed(1)} MB）…`);
const up = await fetch(`https://uploads.github.com/repos/${REPO}/releases/${RELEASE_ID}/assets?name=${ASSET_NAME}`, {
  method: 'POST',
  headers: { Authorization: `token ${token}`, 'Content-Type': 'application/octet-stream', 'Content-Length': size },
  body: fs.createReadStream(FILE),
  duplex: 'half',
});
const j = await up.json();
console.log('上传结果:', j.state, j.size, j.browser_download_url || j.message);
if (j.state !== 'uploaded') process.exit(1);
