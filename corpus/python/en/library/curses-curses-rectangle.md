---
id: "python-en-function-curses-rectangle"
language: "python"
lang: "en"
category: "function"
name: "rectangle"
signature: "rectangle(win, uly, ulx, lry, lrx)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.rectangle"
license: "PSF"
updated: "2026-10-01"
---

# rectangle

Draw a rectangle.  The first argument must be a window object; the remaining
arguments are coordinates relative to that window.  The second and third
arguments are the y and x coordinates of the upper-left corner of the
rectangle to be drawn; the fourth and fifth arguments are the y and x
coordinates of the lower-right corner. The rectangle will be drawn using
VT100/IBM PC forms characters on terminals that make this possible (including
xterm and most other software terminal emulators).  Otherwise it will be drawn
with ASCII  dashes, vertical bars, and plus signs.
