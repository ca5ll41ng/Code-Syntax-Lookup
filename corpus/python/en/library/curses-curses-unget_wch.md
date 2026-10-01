---
id: "python-en-function-curses-unget_wch"
language: "python"
lang: "en"
category: "function"
name: "unget_wch"
signature: "unget_wch(ch)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.unget_wch"
license: "PSF"
updated: "2026-10-01"
---

# unget_wch

Push *ch* so the next `~window.get_wch` will return it.

*ch* may be an integer (a character code, not a key code) or a string of
length 1.

> **Note**
>
> Only one *ch* can be pushed before `get_wch` is called.
>

> *Added in 3.3*

> *Changed in next*: Also available on a narrow build, where *ch* must encode to a single byte (an 8-bit locale).
