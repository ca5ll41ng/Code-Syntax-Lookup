---
id: "python-en-function-curses-window-insstr"
language: "python"
lang: "en"
category: "function"
name: "window.insstr"
signature: "window.insstr(str[, attr])"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.insstr"
license: "PSF"
updated: "2026-10-01"
---

# window.insstr

Insert a character string (as many characters as will fit on the line) before
the character under the cursor.  All characters to the right of the cursor are
shifted right, with the rightmost characters on the line being lost.  The cursor
position does not change (after moving to *y*, *x*, if specified).

*str* may also be a `complexstr`, in which case each cell carries its
own attributes and color pair, so *attr* must not be given.

> *Changed in next*: *str* may now also be a :class:`complexstr`, as described above.
