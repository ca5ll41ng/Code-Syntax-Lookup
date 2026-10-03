// electron/main.mjs — Electron 主进程：窗口加载内置 API 服务；--mcp 时仅运行 MCP
import { app, BrowserWindow } from 'electron';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const isPackaged = app.isPackaged;
let ROOT;
if (!isPackaged) {
  ROOT = path.resolve(HERE, '..');
} else {
  // 打包目录若位于开发仓库内（dist/win-unpacked/…），优先使用仓库实时数据
  let dir = HERE;
  for (let k = 0; k < 5; k++) {
    dir = path.dirname(dir);
    if (fs.existsSync(path.join(dir, 'knowledge.db')) && fs.existsSync(path.join(dir, 'docs-site', 'dist'))) { ROOT = dir; break; }
  }
  if (!ROOT) ROOT = path.join(process.resourcesPath, 'data');
}

if (process.argv.includes('--mcp')) {
  process.env.CSL_ROOT = ROOT;
  const { startMcp } = await import('../server/mcp_server.mjs');
  startMcp();
} else {
  app.whenReady().then(async () => {
    process.env.CSL_ROOT = ROOT;
    const { startApiServer } = await import('../server/api-server.mjs');
    let server, port;
    for (let p = 8421; p <= 8430; p++) {
      try { ({ server, port } = await startApiServer({ root: ROOT, port: p })); break; } catch (e) { if (p === 8430) throw e; }
    }
    const win = new BrowserWindow({
      width: 1400,
      height: 920,
      autoHideMenuBar: true,
      title: 'Code-Syntax-Lookup — 白盒审计语法知识库',
      webPreferences: { contextIsolation: true },
    });
    win.loadURL(`http://127.0.0.1:${port}/`);
    win.on('closed', () => {
      server.close();
      app.quit();
    });
    app.on('window-all-closed', () => app.quit());
  }).catch((e) => {
    const msg = '启动失败: ' + (e.stack || e.message || e);
    try { fs.writeFileSync(path.join(HERE, 'app-error.log'), msg); } catch {}
    console.error(msg);
    process.exit(1);
  });
}
