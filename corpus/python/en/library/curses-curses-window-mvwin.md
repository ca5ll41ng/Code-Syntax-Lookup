---
id: "python-en-function-curses-window-mvwin"
language: "python"
lang: "en"
category: "function"
name: "window.mvwin"
signature: "window.mvwin(new_y, new_x)"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.mvwin"
license: "PSF"
updated: "2026-10-01"
---

# window.mvwin

Move the window so its upper-left corner is at `(new_y, new_x)`.

Moving the window so that any part of it would be off the screen is an error:
the window is not moved and `curses.error` is raised.
