---
id: "python-en-function-curses-window-derwin"
language: "python"
lang: "en"
category: "function"
name: "window.derwin"
signature: "window.derwin(begin_y, begin_x)"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.derwin"
license: "PSF"
updated: "2026-10-01"
---

# window.derwin

An abbreviation for "derive window", `derwin` is the same as calling
`subwin`, except that *begin_y* and *begin_x* are relative to the origin
of the window, rather than relative to the entire screen.  Return a window
object for the derived window.
