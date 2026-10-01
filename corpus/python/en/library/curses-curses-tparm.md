---
id: "python-en-function-curses-tparm"
language: "python"
lang: "en"
category: "function"
name: "tparm"
signature: "tparm(str[, ...])"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.tparm"
license: "PSF"
updated: "2026-10-01"
---

# tparm

Instantiate the bytes object *str* with the supplied parameters, where *str* should
be a parameterized byte string obtained from the terminfo database.  For example,
`tparm(tigetstr("cup"), 5, 3)` could result in `b'\033[6;4H'`, the exact
result depending on terminal type.  Up to nine integer parameters may be supplied.

`setupterm` (or `initscr`) must be called first.
