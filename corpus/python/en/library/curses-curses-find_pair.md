---
id: "python-en-function-curses-find_pair"
language: "python"
lang: "en"
category: "function"
name: "find_pair"
signature: "find_pair(fg, bg)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.find_pair"
license: "PSF"
updated: "2026-10-01"
---

# find_pair

Return the number of a color pair for foreground color *fg* and background
color *bg*, or `-1` if no color pair for this combination of colors has
been allocated.

This function is only available if Python was built against a wide-character
version of the underlying curses library with extended-color support (see
`has_extended_color_support`).

> *Added in next*
