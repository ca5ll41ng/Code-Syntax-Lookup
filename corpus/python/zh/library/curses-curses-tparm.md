---
id: "python-zh-function-curses-tparm"
language: "python"
lang: "zh"
category: "function"
name: "tparm"
signature: "tparm(str[, ...])"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/zh-cn/3/library/curses.html#curses.tparm"
license: "PSF"
updated: "2026-10-01"
---

# tparm

Instantiate the bytes object *str* with the supplied parameters, where *str* should
be a parameterized byte string obtained from the terminfo database.  For example,
`tparm(tigetstr("cup"), 5, 3)` could result in `b'\033[6;4H'`, the exact
result depending on terminal type.  Up to nine integer parameters may be supplied.

:func:`setupterm` (或 :func:`initscr`) 必须先被调用。
