---
id: "python-zh-function-curses-ncurses_version"
language: "python"
lang: "zh"
category: "function"
name: "ncurses_version"
directive: "data"
module: "curses"
source_url: "https://docs.python.org/zh-cn/3/library/curses.html#curses.ncurses_version"
license: "PSF"
updated: "2026-10-01"
---

# ncurses_version

A named tuple containing the three components of the ncurses library
version: *major*, *minor*, and *patch*.  All values are integers.  The
components can also be accessed by name,  so `curses.ncurses_version[0]`
is equivalent to `curses.ncurses_version.major` and so on.

可用性：如果使用了 ncurses 库。

> *Added in 3.8*
