// pipeline/update.mjs — M6 语料更新机制：拉取全部上游仓库最新版，然后全量重建
// 用法：npm run update（等价于 git pull 各源仓库 + npm run build）
import { execSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const REPOS = [
  { dir: 'raw/doc-en', cmd: 'git pull --ff-only' },
  { dir: 'raw/doc-zh', cmd: 'git pull --ff-only' },
  { dir: 'raw/progpilot', cmd: 'git pull --ff-only' },
  { dir: 'raw/cpython', cmd: 'git pull --ff-only' },
  { dir: 'raw/python-docs-zh-cn', cmd: 'git fetch --depth 1 origin 3.14 && git reset --hard FETCH_HEAD' },
  { dir: 'raw/bandit', cmd: 'git pull --ff-only' },
  { dir: 'raw/openjdk', cmd: 'git pull --ff-only' },
  { dir: 'raw/grammars-v4', cmd: 'git pull --ff-only' },
  { dir: 'raw/owasp-cheatsheets', cmd: 'git pull --ff-only' },
];

for (const { dir, cmd } of REPOS) {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) {
    console.log(`[跳过] ${dir} 不存在（首次请按 README 拉取）`);
    continue;
  }
  console.log(`[更新] ${dir}`);
  try {
    execSync(`git -C "${abs}" ${cmd}`, { stdio: 'pipe' });
  } catch (e) {
    console.error(`[失败] ${dir}: ${e.message.split('\n')[0]}`);
  }
}
console.log('上游仓库更新完毕，开始全量重建…');
execSync('npm run build', { cwd: ROOT, stdio: 'inherit' });
