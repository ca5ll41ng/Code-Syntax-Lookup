---
id: "python-en-function-curses-window-subpad"
language: "python"
lang: "en"
category: "function"
name: "window.subpad"
signature: "window.subpad(begin_y, begin_x)"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.subpad"
license: "PSF"
updated: "2026-10-01"
---

# window.subpad

Return a sub-pad, whose upper-left corner is at `(begin_y, begin_x)`, and
whose width/height is *ncols*/*nlines*.  The coordinates are relative to the
parent pad (unlike `subwin`, which uses screen coordinates).  This
method is only available for pads created with `newpad`.
