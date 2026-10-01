---
id: "python-en-function-curses-init_color"
language: "python"
lang: "en"
category: "function"
name: "init_color"
signature: "init_color(color_number, r, g, b)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.init_color"
license: "PSF"
updated: "2026-10-01"
---

# init_color

Change the definition of a color, taking the number of the color to be changed
followed by three RGB values (for the amounts of red, green, and blue
components).  The value of *color_number* must be between `0` and
`COLORS - 1`.  Each of *r*, *g*, *b*, must be a value between `0` and
`1000`.  When `init_color` is used, all occurrences of that color on the
screen immediately change to the new definition.  This function is a no-op on
most terminals; it is active only if `can_change_color` returns `True`.
