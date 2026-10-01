---
id: "python-en-function-curses-window-insch"
language: "python"
lang: "en"
category: "function"
name: "window.insch"
signature: "window.insch(ch[, attr])"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.insch"
license: "PSF"
updated: "2026-10-01"
---

# window.insch

Insert character *ch* with attributes *attr* before the character under the
cursor, or at `(y, x)` if specified.  All characters to the right of the
cursor are shifted one position right, with the rightmost character on the
line being lost.  The cursor position does not change.

> *Changed in next*: Wide and combining characters, and :class:`complexchar` cells, are now accepted.
