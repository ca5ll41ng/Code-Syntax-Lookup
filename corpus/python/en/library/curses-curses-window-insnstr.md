---
id: "python-en-function-curses-window-insnstr"
language: "python"
lang: "en"
category: "function"
name: "window.insnstr"
signature: "window.insnstr(str, n[, attr])"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.insnstr"
license: "PSF"
updated: "2026-10-01"
---

# window.insnstr

Insert a character string (as many characters as will fit on the line) before
the character under the cursor, up to *n* characters.   If *n* is zero or
negative, the entire string is inserted. All characters to the right of the
cursor are shifted right, with the rightmost characters on the line being lost.
The cursor position does not change (after moving to *y*, *x*, if specified).

> *Changed in next*: *str* may now also be a :class:`complexstr`; see :meth:`insstr`.
