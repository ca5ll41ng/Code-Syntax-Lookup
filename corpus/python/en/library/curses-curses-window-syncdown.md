---
id: "python-en-function-curses-window-syncdown"
language: "python"
lang: "en"
category: "function"
name: "window.syncdown"
signature: "window.syncdown()"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.syncdown"
license: "PSF"
updated: "2026-10-01"
---

# window.syncdown

Touch each location in the window that has been touched in any of its ancestor
windows.  This routine is called by `refresh`, so it should almost never
be necessary to call it manually.
