---
id: "python-zh-function-curses-initscr"
language: "python"
lang: "zh"
category: "function"
name: "initscr"
signature: "initscr()"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/zh-cn/3/library/curses.html#curses.initscr"
license: "PSF"
updated: "2026-10-01"
---

# initscr

Initialize the library. Return a `window` object
which represents the whole screen.

请参阅 :func:`setupterm` 了解关于在此函数之前调用它的注意事项。

> **Note**
>
> If there is an error opening the terminal, the underlying curses library may
> cause the interpreter to exit.
>
