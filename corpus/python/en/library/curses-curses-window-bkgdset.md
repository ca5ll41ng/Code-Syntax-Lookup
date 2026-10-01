---
id: "python-en-function-curses-window-bkgdset"
language: "python"
lang: "en"
category: "function"
name: "window.bkgdset"
signature: "window.bkgdset(ch[, attr])"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.bkgdset"
license: "PSF"
updated: "2026-10-01"
---

# window.bkgdset

Set the window's background.  A window's background consists of a character and
any combination of attributes.  The attribute part of the background is combined
(OR'ed) with all non-blank characters that are written into the window.  Both
the character and attribute parts of the background are combined with the blank
characters.  The background becomes a property of the character and moves with
the character through any scrolling and insert/delete line/character operations.

> *Changed in next*: Wide and combining characters, and :class:`complexchar` cells, are now accepted.
