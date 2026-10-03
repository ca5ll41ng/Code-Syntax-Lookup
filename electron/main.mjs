// electron/main.mjs — Electron 主进程：窗口加载内置 API 服务；--mcp 时仅运行 MCP
import { app, BrowserWindow, Menu, shell } from 'electron';
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

function buildMenu(win, origin) {
  const nav = (go) => () => {
    if (go === 'home') win.loadURL(origin + '/');
    else if (go === 'back') win.webContents.navigationHistory.goBack();
    else win.webContents.navigationHistory.goForward();
  };
  const menu = Menu.buildFromTemplate([
    { label: '导航', submenu: [
      { label: '首页', accelerator: "Alt+H", click: nav('home') },
      { label: '后退', accelerator: "Alt+Left", click: nav('back') },
      { label: '前进', accelerator: "Alt+Right", click: nav('forward') },
      { label: '刷新', accelerator: "F5", click: () => win.webContents.reload() },
    ] },
  ]);
  Menu.setApplicationMenu(menu);
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
      title: 'Code-Syntax-Lookup — 白盒审计语法知识库',
      webPreferences: { contextIsolation: true },
    });
    buildMenu(win, `http://127.0.0.1:${port}`);
    win.webContents.setWindowOpenHandler(({ url }) => {
      if (!url.startsWith(`http://127.0.0.1:${port}`)) { shell.openExternal(url); return { action: 'deny' }; }
      return { action: 'allow' };
    });
    win.webContents.on('will-navigate', (e, url) => {
      if (!url.startsWith(`http://127.0.0.1:${port}`)) { e.preventDefault(); shell.openExternal(url); }
    });
    const injectNav = () => {
      const url = win.webContents.getURL() || '';
      if (!url.includes('/manual/')) return; // 自有页面已有顶栏
      win.webContents.executeJavaScript(`
        (function () {
          if (document.getElementById('csl-nav')) return;
          var d = document.createElement('div');
          d.id = 'csl-nav';
          d.style.cssText = 'position:fixed;bottom:18px;right:18px;z-index:2147483647;display:flex;gap:8px;font:13px/1 system-ui,sans-serif';
          var mk = function (txt, act, bg) {
            var b = document.createElement('button');
            b.textContent = txt;
            b.style.cssText = 'padding:9px 14px;border:none;border-radius:999px;cursor:pointer;color:#fff;font-weight:700;box-shadow:0 2px 10px rgba(0,0,0,.35);background:' + bg;
            b.onclick = act;
            d.appendChild(b);
          };
          mk('⌂ 主页', function () { location.href = '/'; }, '#4f46e5');
          mk('← 后退', function () { history.back(); }, '#334155');
          document.body.appendChild(d);
        })();
      `);
    };
    win.webContents.on('did-finish-load', injectNav);
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
