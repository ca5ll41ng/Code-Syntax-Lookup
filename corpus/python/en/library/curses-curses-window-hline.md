---
id: "python-en-function-curses-window-hline"
language: "python"
lang: "en"
category: "function"
name: "window.hline"
signature: "window.hline(ch, n[, attr])"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.hline"
license: "PSF"
updated: "2026-10-01"
---

# window.hline

Display a horizontal line starting at `(y, x)` with length *n* consisting of
the character *ch* with attributes *attr*.  The line stops at the right edge
of the window if fewer than *n* cells are available.

> *Changed in next*: Wide and combining characters, and :class:`complexchar` cells, are now accepted.
