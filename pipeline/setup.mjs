// pipeline/setup.mjs — 首次安装自动化：拉取全部源仓库 + 安装依赖 + 全量构建
// 用法：npm run setup
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const run = (cmd, cwd = ROOT) => {
  console.log(`$ ${cmd}`);
  execSync(cmd, { cwd, stdio: 'inherit' });
};

const HAS = (dir) => fs.existsSync(path.join(ROOT, dir));

const steps = [];
if (!HAS('raw/doc-en')) steps.push(['git clone --depth 1 https://github.com/php/doc-en raw/doc-en', ROOT]);
if (!HAS('raw/doc-zh')) steps.push(['git clone --depth 1 https://github.com/php/doc-zh raw/doc-zh', ROOT]);
if (!HAS('raw/progpilot')) steps.push(['git clone --depth 1 https://github.com/designsecurity/progpilot raw/progpilot', ROOT]);
if (!HAS('raw/cpython')) steps.push(['git clone --depth 1 --filter=blob:none --sparse https://github.com/python/cpython raw/cpython', ROOT]);
if (HAS('raw/cpython') && !HAS('raw/cpython/Doc')) steps.push(['git sparse-checkout set Doc Grammar', path.join(ROOT, 'raw', 'cpython')]);
if (!HAS('raw/python-docs-zh-cn')) steps.push(['git clone --depth 1 https://github.com/python/python-docs-zh-cn raw/python-docs-zh-cn', ROOT]);
if (HAS('raw/python-docs-zh-cn') && !HAS('raw/python-docs-zh-cn/library')) steps.push(['git fetch --depth 1 origin 3.14 && git checkout -q FETCH_HEAD', path.join(ROOT, 'raw', 'python-docs-zh-cn')]);
if (!HAS('raw/bandit')) steps.push(['git clone --depth 1 https://github.com/PyCQA/bandit raw/bandit', ROOT]);
if (!HAS('raw/openjdk')) steps.push(['git clone --depth 1 --filter=blob:none --sparse https://github.com/openjdk/jdk raw/openjdk', ROOT]);
if (HAS('raw/openjdk') && !HAS('raw/openjdk/src')) steps.push(['git sparse-checkout set src', path.join(ROOT, 'raw', 'openjdk')]);
if (!HAS('raw/grammars-v4')) steps.push(['git clone --depth 1 --filter=blob:none --sparse https://github.com/antlr/grammars-v4 raw/grammars-v4', ROOT]);
if (HAS('raw/grammars-v4') && !HAS('raw/grammars-v4/java')) steps.push(['git sparse-checkout set java php python', path.join(ROOT, 'raw', 'grammars-v4')]);
if (!HAS('raw/owasp-cheatsheets')) steps.push(['git clone --depth 1 https://github.com/OWASP/CheatSheetSeries raw/owasp-cheatsheets', ROOT]);

if (steps.length === 0) console.log('源仓库已全部就绪');
for (const [cmd, cwd] of steps) run(cmd, cwd);

if (!fs.existsSync(path.join(ROOT, 'node_modules'))) run('npm install');
if (!fs.existsSync(path.join(ROOT, 'docs-site', 'node_modules'))) run('npm install', path.join(ROOT, 'docs-site'));

console.log('开始全量构建（含向量嵌入，约 10-40 分钟视子集而定）…');
run('npm run build');
console.log('\n完成！npm run site:preview 浏览站点 · npm run mcp 启动 MCP · npm test 回归测试');
