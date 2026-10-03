// electron/main.mjs — Electron 主进程：窗口加载内置 API 服务；--mcp 时仅运行 MCP
import { app, BrowserWindow } from 'electron';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const isPackaged = app.isPackaged;
const ROOT = isPackaged ? path.join(process.resourcesPath, 'data') : path.resolve(HERE, '..');

if (process.argv.includes('--mcp')) {
  process.env.CSL_ROOT = ROOT;
  const { startMcp } = await import('../server/mcp_server.mjs');
  startMcp();
} else {
  app.whenReady().then(async () => {
    process.env.CSL_ROOT = ROOT;
    const { startApiServer } = await import('../server/api-server.mjs');
    const { server, port } = await startApiServer({ root: ROOT, port: 0 });
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
  });
}
