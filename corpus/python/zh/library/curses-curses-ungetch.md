---
id: "python-zh-function-curses-ungetch"
language: "python"
lang: "zh"
category: "function"
name: "ungetch"
signature: "ungetch(ch)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/zh-cn/3/library/curses.html#curses.ungetch"
license: "PSF"
updated: "2026-10-01"
---

# ungetch

Push *ch* so the next `~window.getch` or `~window.get_wch` will
return it.

*ch* may be an integer (a key code or the code of an encoded byte), a byte,
or a string of length 1.  A one-character string is pushed like
`unget_wch`; on a narrow build it must encode to a single byte.

> **Note**
>
> 在 :meth:`!getch` 被调用之前只能推送一个 *ch*。
>

> *Changed in next*: A one-character string argument is no longer required to encode to a single byte, except on a narrow build.
