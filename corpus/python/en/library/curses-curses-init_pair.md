---
id: "python-en-function-curses-init_pair"
language: "python"
lang: "en"
category: "function"
name: "init_pair"
signature: "init_pair(pair_number, fg, bg)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.init_pair"
license: "PSF"
updated: "2026-10-01"
---

# init_pair

Change the definition of a color-pair.  It takes three arguments: the number of
the color-pair to be changed, the foreground color number, and the background
color number.  The value of *pair_number* must be between `1` and
`COLOR_PAIRS - 1` (the `0` color pair can only be changed by
`use_default_colors` and `assume_default_colors`).
The value of *fg* and *bg* arguments must be between `0` and
`COLORS - 1`, or, after calling `use_default_colors` or
`assume_default_colors`, `-1`.
If the color-pair was previously initialized, the screen is
refreshed and all occurrences of that color-pair are changed to the new
definition.
