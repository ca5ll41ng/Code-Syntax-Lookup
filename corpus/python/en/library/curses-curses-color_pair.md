---
id: "python-en-function-curses-color_pair"
language: "python"
lang: "en"
category: "function"
name: "color_pair"
signature: "color_pair(pair_number)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.color_pair"
license: "PSF"
updated: "2026-10-01"
---

# color_pair

Return the attribute value for displaying text in the specified color pair.
Only color pairs that fit in the color-pair field of the returned value can
be represented (usually the first 256); a larger *pair_number* raises
`OverflowError` rather than being silently masked to a different pair.
Use `~window.color_set` or `~window.attr_set` to display higher
pairs.  This attribute value can be combined with `A_STANDOUT`,
`A_REVERSE`, and the other `A_\*` attributes.
`pair_number` is the counterpart to this function.
