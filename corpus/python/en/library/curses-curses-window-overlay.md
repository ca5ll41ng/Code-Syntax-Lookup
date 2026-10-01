---
id: "python-en-function-curses-window-overlay"
language: "python"
lang: "en"
category: "function"
name: "window.overlay"
signature: "window.overlay(destwin[, sminrow, smincol, dminrow, dmincol, dmaxrow, dmaxcol])"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.overlay"
license: "PSF"
updated: "2026-10-01"
---

# window.overlay

Overlay the window on top of *destwin*. The windows need not be the same size,
only the overlapping region is copied. This copy is non-destructive, which means
that the current background character does not overwrite the old contents of
*destwin*.

To get fine-grained control over the copied region, the second form of
`overlay` can be used. *sminrow* and *smincol* are the upper-left
coordinates of the source window, and the other variables mark a rectangle in
the destination window.
