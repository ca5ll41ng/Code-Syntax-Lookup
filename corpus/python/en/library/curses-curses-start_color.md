---
id: "python-en-function-curses-start_color"
language: "python"
lang: "en"
category: "function"
name: "start_color"
signature: "start_color()"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.start_color"
license: "PSF"
updated: "2026-10-01"
---

# start_color

Must be called if the programmer wants to use colors, and before any other color
manipulation routine is called.  It is good practice to call this routine right
after `initscr`.

`start_color` initializes eight basic colors (black, red,  green, yellow,
blue, magenta, cyan, and white), and two global variables in the `curses`
module, `COLORS` and `COLOR_PAIRS`, containing the maximum number
of colors and color-pairs the terminal can support.  It also restores the colors
on the terminal to the values they had when the terminal was just turned on.
