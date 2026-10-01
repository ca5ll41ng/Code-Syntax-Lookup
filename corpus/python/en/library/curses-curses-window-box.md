---
id: "python-en-function-curses-window-box"
language: "python"
lang: "en"
category: "function"
name: "window.box"
signature: "window.box([vertch, horch])"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.box"
license: "PSF"
updated: "2026-10-01"
---

# window.box

Similar to `border`, but both *ls* and *rs* are *vertch* and both *ts* and
*bs* are *horch*.  The default corner characters are always used by this function.

> *Changed in next*: Wide and combining characters, and :class:`complexchar` cells, are now accepted.  A single call cannot mix :class:`complexchar` cells with integer or byte characters.
