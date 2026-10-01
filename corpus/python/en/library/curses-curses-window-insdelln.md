---
id: "python-en-function-curses-window-insdelln"
language: "python"
lang: "en"
category: "function"
name: "window.insdelln"
signature: "window.insdelln(nlines)"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.insdelln"
license: "PSF"
updated: "2026-10-01"
---

# window.insdelln

Insert *nlines* lines into the specified window above the current line.  The
*nlines* bottom lines are lost.  For negative *nlines*, delete *nlines* lines
starting with the one under the cursor, and move the remaining lines up.  The
bottom *nlines* lines are cleared.  The current cursor position remains the
same.
