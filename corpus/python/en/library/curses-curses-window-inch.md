---
id: "python-en-function-curses-window-inch"
language: "python"
lang: "en"
category: "function"
name: "window.inch"
signature: "window.inch([y, x])"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.inch"
license: "PSF"
updated: "2026-10-01"
---

# window.inch

Return the character at the given position in the window.
The bottom 8 bits are the character proper and the upper bits are the attributes;
extract them with the `A_CHARTEXT` and `A_ATTRIBUTES` bit-masks,
and the color pair with `pair_number`.
The character byte is the locale-encoded byte of the cell's character,
consistent with `instr`.
It cannot represent a cell holding combining characters, a character that does
not fit in a single byte, or a color pair outside the `color_pair`
range; use `in_wch` for those, which returns it as a `complexchar`.
