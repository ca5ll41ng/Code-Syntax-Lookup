---
id: "python-zh-function-curses-window-leaveok"
language: "python"
lang: "zh"
category: "function"
name: "window.leaveok"
signature: "window.leaveok(flag)"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/zh-cn/3/library/curses.html#curses.window.leaveok"
license: "PSF"
updated: "2026-10-01"
---

# window.leaveok

If *flag* is `True`, cursor is left where it is on update, instead of being at "cursor
position."  This reduces cursor movement where possible.

如果 *flag* 为 ``False``，光标在更新后将总是位于“光标位置”。
