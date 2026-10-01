---
id: "python-en-function-curses-mousemask"
language: "python"
lang: "en"
category: "function"
name: "mousemask"
signature: "mousemask(mousemask)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.mousemask"
license: "PSF"
updated: "2026-10-01"
---

# mousemask

Set the mouse events to be reported, and return a tuple `(availmask,
oldmask)`.   *availmask* indicates which of the specified mouse events can be
reported; on complete failure it returns `0`.  *oldmask* is the previous value of
the mouse event mask.  If this function is never called, no mouse
events are ever reported.
