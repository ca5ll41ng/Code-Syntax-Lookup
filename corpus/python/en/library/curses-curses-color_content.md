---
id: "python-en-function-curses-color_content"
language: "python"
lang: "en"
category: "function"
name: "color_content"
signature: "color_content(color_number)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.color_content"
license: "PSF"
updated: "2026-10-01"
---

# color_content

Return the intensity of the red, green, and blue (RGB) components in the color
*color_number*, which must be between `0` and `COLORS - 1`.  Return a 3-tuple,
containing the R,G,B values for the given color, which will be between
`0` (no component) and `1000` (maximum amount of component).  Raise an
exception if the color is not supported.
