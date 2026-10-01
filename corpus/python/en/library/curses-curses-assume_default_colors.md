---
id: "python-en-function-curses-assume_default_colors"
language: "python"
lang: "en"
category: "function"
name: "assume_default_colors"
signature: "assume_default_colors(fg, bg, /)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.assume_default_colors"
license: "PSF"
updated: "2026-10-01"
---

# assume_default_colors

Allow use of default values for colors on terminals supporting this feature.
Use this to support transparency in your application.

* Assign terminal default foreground/background colors to color number `-1`.
  So `init_pair(x, COLOR_RED, -1)` will initialize pair *x* as red
  on default background and `init_pair(x, -1, COLOR_BLUE)` will
  initialize pair *x* as default foreground on blue.

* Change the definition of the color-pair `0` to `(fg, bg)`.

This is an ncurses extension.

> *Added in 3.14*
