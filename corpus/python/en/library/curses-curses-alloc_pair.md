---
id: "python-en-function-curses-alloc_pair"
language: "python"
lang: "en"
category: "function"
name: "alloc_pair"
signature: "alloc_pair(fg, bg)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.alloc_pair"
license: "PSF"
updated: "2026-10-01"
---

# alloc_pair

Allocate a color pair for foreground color *fg* and background color *bg*,
and return its number.  If a color pair for the same combination of colors
already exists, return its number.  Otherwise allocate a new color pair and
return its number.

This function is only available if Python was built against a wide-character
version of the underlying curses library with extended-color support (see
`has_extended_color_support`).

> *Added in next*
