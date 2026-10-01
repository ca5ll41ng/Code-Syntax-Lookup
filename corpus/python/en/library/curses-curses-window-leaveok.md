---
id: "python-en-function-curses-window-leaveok"
language: "python"
lang: "en"
category: "function"
name: "window.leaveok"
signature: "window.leaveok(flag)"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.leaveok"
license: "PSF"
updated: "2026-10-01"
---

# window.leaveok

If *flag* is `True`, cursor is left where it is on update, instead of being at "cursor
position."  This reduces cursor movement where possible.

If *flag* is `False`, cursor will always be at "cursor position" after an update.
