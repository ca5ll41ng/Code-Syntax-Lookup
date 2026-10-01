---
id: "python-en-function-curses-window-refresh"
language: "python"
lang: "en"
category: "function"
name: "window.refresh"
signature: "window.refresh([pminrow, pmincol, sminrow, smincol, smaxrow, smaxcol])"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.refresh"
license: "PSF"
updated: "2026-10-01"
---

# window.refresh

Update the display immediately (sync actual screen with previous
drawing/deleting methods).

The 6 arguments can only be specified, and are then required, when the window
is a pad created with `newpad`.  The additional parameters are needed to indicate what part
of the pad and screen are involved. *pminrow* and *pmincol* specify the
upper-left corner of the rectangle to be displayed in the pad.  *sminrow*,
*smincol*, *smaxrow*, and *smaxcol* specify the edges of the rectangle to be
displayed on the screen.  The lower-right corner of the rectangle to be
displayed in the pad is calculated from the screen coordinates, since the
rectangles must be the same size.  Both rectangles must be entirely contained
within their respective structures.  Negative values of *pminrow*, *pmincol*,
*sminrow*, or *smincol* are treated as if they were zero.
