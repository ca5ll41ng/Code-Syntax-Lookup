---
id: "python-en-function-curses-window-scroll"
language: "python"
lang: "en"
category: "function"
name: "window.scroll"
signature: "window.scroll([lines=1])"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.scroll"
license: "PSF"
updated: "2026-10-01"
---

# window.scroll

Scroll the screen or scrolling region.  Scroll upward by *lines* lines if
*lines* is positive, or downward if it is negative.  Scrolling has no effect
unless it has been enabled for the window with `scrollok`.
