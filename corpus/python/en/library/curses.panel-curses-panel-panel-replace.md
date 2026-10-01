---
id: "python-en-function-curses-panel-panel-replace"
language: "python"
lang: "en"
category: "function"
name: "panel.replace"
signature: "panel.replace(win)"
directive: "method"
module: "curses.panel"
source_url: "https://docs.python.org/3/library/curses.panel.html#curses.panel.panel.replace"
license: "PSF"
updated: "2026-10-01"
---

# panel.replace

Change the window associated with the panel to the window *win*.
Raise `curses.panel.error` if *win* has been detached from its
screen by `screen.close()`.
