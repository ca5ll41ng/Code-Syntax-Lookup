// pipeline/build_exe.mjs — 打包 Windows 单文件 exe（Node SEA）
// 产出：CodeSyntaxLookup.exe（放入项目根目录使用；双击=本地站点+API，--mcp=MCP 服务器）
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const run = (cmd) => {
  console.log(`$ ${cmd}`);
  execSync(cmd, { cwd: ROOT, stdio: 'inherit' });
};

// 1) esbuild 打包入口（transformers 保持外部引用，运行时从 node_modules 加载）
run('npx esbuild server/app.mjs --bundle --platform=node --format=cjs --target=node24 --outfile=app.cjs --external:@huggingface/transformers --legal-comments=none');

// 2) SEA 配置与 blob
fs.writeFileSync(
  path.join(ROOT, 'sea-config.json'),
  JSON.stringify({
    main: 'app.cjs',
    output: 'sea-prep.blob',
    disableExperimentalSEAWarning: true,
    useSnapshot: false,
    useCodeCache: true,
  }, null, 2),
);
run('node --experimental-sea-config sea-config.json');

// 3) 基座 node 运行时（官方构建才含 SEA fuse 哨兵），缺失时自动下载
const BASE_EXE = path.join(ROOT, 'build', 'node24.exe');
if (!fs.existsSync(BASE_EXE)) {
  console.log('下载官方 node.exe 基座…');
  fs.mkdirSync(path.join(ROOT, 'build'), { recursive: true });
  const res = await fetch('https://nodejs.org/dist/v24.19.0/win-x64/node.exe');
  if (!res.ok) throw new Error('node.exe 基座下载失败: HTTP ' + res.status);
  fs.writeFileSync(BASE_EXE, Buffer.from(await res.arrayBuffer()));
}
const exe = path.join(ROOT, 'CodeSyntaxLookup.exe');
fs.copyFileSync(BASE_EXE, exe);

// 4) postject 注入
run(`npx postject "${exe}" NODE_SEA_BLOB sea-prep.blob --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2`);

const size = (fs.statSync(exe).size / 1024 / 1024).toFixed(1);
console.log(`\n打包完成: ${exe}（${size} MB）`);
console.log('使用：放入项目根目录双击运行；--mcp 参数切换 MCP 模式。');
