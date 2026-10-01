---
id: "python-zh-function-curses-tigetstr"
language: "python"
lang: "zh"
category: "function"
name: "tigetstr"
signature: "tigetstr(capname)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/zh-cn/3/library/curses.html#curses.tigetstr"
license: "PSF"
updated: "2026-10-01"
---

# tigetstr

Return the value of the string capability corresponding to the terminfo
capability name *capname* as a bytes object.  Return `None` if *capname*
is not a terminfo "string capability", or is canceled or absent from the
terminal description.

:func:`setupterm` (或 :func:`initscr`) 必须先被调用。
