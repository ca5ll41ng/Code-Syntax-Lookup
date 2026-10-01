---
id: "python-zh-function-curses-unget_wch"
language: "python"
lang: "zh"
category: "function"
name: "unget_wch"
signature: "unget_wch(ch)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/zh-cn/3/library/curses.html#curses.unget_wch"
license: "PSF"
updated: "2026-10-01"
---

# unget_wch

推送 *ch* 以便让下一个 :meth:`~window.get_wch` 返回该字符。

*ch* may be an integer (a character code, not a key code) or a string of
length 1.

> **Note**
>
> 在 :meth:`!get_wch` 被调用之前只能推送一个 *ch*。
>

> *Added in 3.3*

> *Changed in next*: Also available on a narrow build, where *ch* must encode to a single byte (an 8-bit locale).
