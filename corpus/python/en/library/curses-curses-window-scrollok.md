---
id: "python-en-function-curses-window-scrollok"
language: "python"
lang: "en"
category: "function"
name: "window.scrollok"
signature: "window.scrollok(flag)"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.scrollok"
license: "PSF"
updated: "2026-10-01"
---

# window.scrollok

Control what happens when the cursor of a window is moved off the edge of the
window or scrolling region, either as a result of a newline action on the bottom
line, or typing the last character of the last line.  If *flag* is `False`, the
cursor is left on the bottom line.  If *flag* is `True`, the window is scrolled up
one line.  Note that in order to get the physical scrolling effect on the
terminal, it is also necessary to call `idlok`.
