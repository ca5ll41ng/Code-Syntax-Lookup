---
id: "python-en-function-curses-window-enclose"
language: "python"
lang: "en"
category: "function"
name: "window.enclose"
signature: "window.enclose(y, x)"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.enclose"
license: "PSF"
updated: "2026-10-01"
---

# window.enclose

Test whether the given pair of screen-relative character-cell coordinates are
enclosed by the given window, returning `True` or `False`.  It is useful for
determining what subset of the screen windows enclose the location of a mouse
event.

> *Changed in 3.10*: Previously it returned ``1`` or ``0`` instead of ``True`` or ``False``.
