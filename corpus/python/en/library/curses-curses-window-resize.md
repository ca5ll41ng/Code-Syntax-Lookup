---
id: "python-en-function-curses-window-resize"
language: "python"
lang: "en"
category: "function"
name: "window.resize"
signature: "window.resize(nlines, ncols)"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.resize"
license: "PSF"
updated: "2026-10-01"
---

# window.resize

Reallocate storage for a curses window to adjust its dimensions to the
specified values.  If either dimension is larger than the current values, the
window's data is filled with blanks that have the current background
rendition (as set by `bkgdset`) merged into them.
