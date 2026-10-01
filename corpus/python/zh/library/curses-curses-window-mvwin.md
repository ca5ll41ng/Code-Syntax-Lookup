---
id: "python-zh-function-curses-window-mvwin"
language: "python"
lang: "zh"
category: "function"
name: "window.mvwin"
signature: "window.mvwin(new_y, new_x)"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/zh-cn/3/library/curses.html#curses.window.mvwin"
license: "PSF"
updated: "2026-10-01"
---

# window.mvwin

移动窗口以使其左上角位于 ``(new_y, new_x)``。

Moving the window so that any part of it would be off the screen is an error:
the window is not moved and `curses.error` is raised.
