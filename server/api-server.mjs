// server/api-server.mjs — 静态站点 + 检索 API 服务（app.mjs 与 Electron 主进程共用）
// startApiServer({ root, port }): root = 数据目录（含 knowledge.db 与 docs-site/dist）
import http from 'node:http';
import path from 'node:path';
import fs from 'node:fs';
import { pathToFileURL } from 'node:url';

const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json', '.md': 'text/markdown; charset=utf-8', '.txt': 'text/plain; charset=utf-8',
  '.png': 'image/png', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.woff2': 'font/woff2',
};

export async function startApiServer({ root, port = 8421 }) {
  const DIST = path.join(root, 'docs-site', 'dist');
  const kb = await import('./kb.mjs');
  const rag = await import('./rag.mjs');

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

  return new Promise((resolve) => {
    server.listen(port, '127.0.0.1', () => resolve({ server, port }));
  });
}
