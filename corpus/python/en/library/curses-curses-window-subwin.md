---
id: "python-en-function-curses-window-subwin"
language: "python"
lang: "en"
category: "function"
name: "window.subwin"
signature: "window.subwin(begin_y, begin_x)"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.subwin"
license: "PSF"
updated: "2026-10-01"
---

# window.subwin

Return a sub-window, whose upper-left corner is at the screen-relative
coordinates `(begin_y, begin_x)`, and whose width/height is *ncols*/*nlines*.

By default, the sub-window will extend from the specified position to the lower
right corner of the window.
