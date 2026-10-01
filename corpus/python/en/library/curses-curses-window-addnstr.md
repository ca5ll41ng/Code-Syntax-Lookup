---
id: "python-en-function-curses-window-addnstr"
language: "python"
lang: "en"
category: "function"
name: "window.addnstr"
signature: "window.addnstr(str, n[, attr])"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.addnstr"
license: "PSF"
updated: "2026-10-01"
---

# window.addnstr

Paint at most *n* characters of the character string *str* at
`(y, x)` with attributes
*attr*, overwriting anything previously on the display.

> *Changed in next*: *str* may now also be a :class:`complexstr`; see :meth:`addstr`.
