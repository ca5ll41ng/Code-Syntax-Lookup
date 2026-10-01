---
id: "python-zh-function-curses-window-notimeout"
language: "python"
lang: "zh"
category: "function"
name: "window.notimeout"
signature: "window.notimeout(flag)"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/zh-cn/3/library/curses.html#curses.window.notimeout"
license: "PSF"
updated: "2026-10-01"
---

# window.notimeout

如果 *flag* 为 ``True``，则转义序列将不会发生超时。

If *flag* is `False`, after a few milliseconds, an escape sequence will not be
interpreted, and will be left in the input stream as is.
