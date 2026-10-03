// server/app.mjs — 单文件 exe 入口（Node SEA 打包）
// 模式：默认 = 启动本地站点 + 检索 API 并自动打开浏览器；--mcp = MCP stdio 服务器；--embed = 重新向量化
// 数据目录：SEA 模式下为 exe 所在目录（要求 knowledge.db 与 docs-site/dist 就位于此）
import http from 'node:http';
import { exec } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { isSea } from 'node:sea';
import * as kb from './kb.mjs';
import * as rag from './rag.mjs';
import * as mcp from './mcp_server.mjs';

const argv = process.argv.slice(2);
const HERE = isSea() ? path.dirname(process.execPath) : path.dirname(fileURLToPath(import.meta.url));
const ROOT = isSea() ? HERE : path.resolve(HERE, '..');

async function runEmbed() {
  const embedPath = path.join(ROOT, 'pipeline', 'embed.mjs');
  if (!fs.existsSync(embedPath)) {
    console.error('未找到 pipeline/embed.mjs —— 请在完整项目目录中运行，或使用 npm run embed');
    process.exit(1);
  }
  await import(pathToFileURL(embedPath).href);
}

const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json', '.md': 'text/markdown; charset=utf-8', '.txt': 'text/plain; charset=utf-8',
  '.png': 'image/png', '.svg': 'image/svg+xml', '.ico': 'image/x-icon',
};

async function runWeb(port) {
  const DIST = path.join(ROOT, 'docs-site', 'dist');

  const json = (res, code, obj) => { res.writeHead(code, { 'content-type': 'application/json; charset=utf-8' }); res.end(JSON.stringify(obj)); };

  const server = http.createServer(async (req, res) => {
    const u = new URL(req.url, `http://127.0.0.1:${port}`);
    try {
      if (u.pathname === '/api/search') {
        const rows = await kb.searchSyntax({
          language: u.searchParams.get('lang') || 'php',
          query: u.searchParams.get('q') || '',
          danger: u.searchParams.get('danger') || undefined,
          limit: parseInt(u.searchParams.get('limit') || '10', 10),
        });
        return json(res, 200, { results: rows });
      }
      if (u.pathname === '/api/entry') {
        const row = kb.getEntry({ language: u.searchParams.get('lang') || 'php', name: u.searchParams.get('name') || '' });
        return json(res, row ? 200 : 404, row ? { entry: row } : { error: '未找到' });
      }
      if (u.pathname === '/api/ask') {
        const q = u.searchParams.get('q') || '';
        if (!q.trim()) return json(res, 400, { error: '缺少 q 参数' });
        const r = await rag.askAudit({ language: u.searchParams.get('lang') || 'php', question: q });
        return json(res, 200, r);
      }
      if (u.pathname === '/api/stats') return json(res, 200, kb.kbStats());

      // 静态站点
      let rel = decodeURIComponent(u.pathname).replace(/^\/+/, '') || 'index.html';
      let file = path.normalize(path.join(DIST, rel));
      if (!file.startsWith(DIST)) { res.writeHead(403); return res.end(); }
      if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
      if (!fs.existsSync(file)) {
        if (fs.existsSync(file + '.html')) file += '.html';
        else { res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' }); return res.end('404 Not Found'); }
      }
      res.writeHead(200, { 'content-type': MIME[path.extname(file)] || 'application/octet-stream' });
      res.end(fs.readFileSync(file));
    } catch (e) {
      json(res, 500, { error: String(e.message || e) });
    }
  });

  server.listen(port, '127.0.0.1', () => {
    const url = `http://127.0.0.1:${port}`;
    console.log('Code-Syntax-Lookup 已启动: ' + url);
    console.log('关闭此窗口即可停止服务。');
    if (!argv.includes('--no-open')) {
      if (process.platform === 'win32') exec(`start "" "${url}"`);
      else if (process.platform === 'darwin') exec(`open "${url}"`);
    }
  });
}

async function main() {
  if (argv.includes('--mcp')) return mcp.startMcp();
  if (argv.includes('--embed')) return runEmbed();
  const portArg = (argv.find((a) => a.startsWith('--port=')) || '').split('=')[1];
  const port = parseInt(portArg || '8421', 10);
  return runWeb(port);
}

main().catch((e) => {
  console.error('启动失败:', e.message || e);
  if (!isSea()) console.error(e.stack);
  process.exit(1);
});
