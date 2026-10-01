---
id: "python-en-function-curses-window-overwrite"
language: "python"
lang: "en"
category: "function"
name: "window.overwrite"
signature: "window.overwrite(destwin[, sminrow, smincol, dminrow, dmincol, dmaxrow, dmaxcol])"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.overwrite"
license: "PSF"
updated: "2026-10-01"
---

# window.overwrite

Overwrite the window on top of *destwin*. The windows need not be the same size,
in which case only the overlapping region is copied. This copy is destructive,
which means that the current background character overwrites the old contents of
*destwin*.

To get fine-grained control over the copied region, the second form of
`overwrite` can be used. *sminrow* and *smincol* are the upper-left
coordinates of the source window, the other variables mark a rectangle in the
destination window.
