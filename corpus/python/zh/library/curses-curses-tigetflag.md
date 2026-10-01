---
id: "python-zh-function-curses-tigetflag"
language: "python"
lang: "zh"
category: "function"
name: "tigetflag"
signature: "tigetflag(capname)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/zh-cn/3/library/curses.html#curses.tigetflag"
license: "PSF"
updated: "2026-10-01"
---

# tigetflag

Return the value of the Boolean capability corresponding to the terminfo
capability name *capname* as an integer.  Return the value `-1` if *capname* is not a
Boolean capability, or `0` if it is canceled or absent from the terminal
description.

:func:`setupterm` (或 :func:`initscr`) 必须先被调用。
