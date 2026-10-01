---
id: "python-en-function-curses-window-mouse_trafo"
language: "python"
lang: "en"
category: "function"
name: "window.mouse_trafo"
signature: "window.mouse_trafo(y, x, to_screen)"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.mouse_trafo"
license: "PSF"
updated: "2026-10-01"
---

# window.mouse_trafo

Convert between window-relative and screen-relative (`stdscr`-relative) character-cell coordinates.
If *to_screen* is true, convert the window-relative coordinates *y*, *x* to screen-relative coordinates;
otherwise convert in the opposite direction.
The two coordinate systems differ when lines are reserved on the screen, for example for soft labels.

Return the converted coordinates as a `(y, x)` tuple, or `None` if they lie outside the window.

> *Added in next*
