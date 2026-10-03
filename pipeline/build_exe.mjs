// pipeline/build_exe.mjs — 构建可双击的桌面应用（Electron 窗口版）
// 产出：dist/win-unpacked/CodeSyntaxLookup.exe —— 双击即弹出 App 窗口（非浏览器）
// 数据：项目内运行优先实时数据；整包拷走后使用内置 resources/data
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const run = (cmd) => {
  console.log(`$ ${cmd}`);
  execSync(cmd, { cwd: ROOT, stdio: 'inherit' });
};

// 数据包（库 + 站点 + 模型）需要是最新的
const dataDir = path.join(ROOT, 'release-data');
if (!fs.existsSync(path.join(dataDir, 'knowledge.db'))) {
  console.log('首次构建：组装数据包…');
  run('node pipeline/pack_release.mjs');
}

run('npx electron-builder --win --dir --x64');

const exe = path.join(ROOT, 'dist', 'win-unpacked', 'CodeSyntaxLookup.exe');
if (!fs.existsSync(exe)) {
  console.error('构建异常：未找到 ' + exe);
  process.exit(1);
}
const size = (fs.statSync(exe).size / 1024 / 1024).toFixed(1);
console.log(`\n桌面应用构建完成: ${exe}（主程序 ${size} MB）`);
console.log('双击运行即可弹出 App 窗口；整包拷走（win-unpacked 文件夹）后也可独立使用。');
