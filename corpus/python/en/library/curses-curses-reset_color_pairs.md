---
id: "python-en-function-curses-reset_color_pairs"
language: "python"
lang: "en"
category: "function"
name: "reset_color_pairs"
signature: "reset_color_pairs()"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.reset_color_pairs"
license: "PSF"
updated: "2026-10-01"
---

# reset_color_pairs

Discard all color-pair definitions, releasing the color pairs allocated by
`init_pair` and `alloc_pair`.

This function is only available if Python was built against a wide-character
version of the underlying curses library with extended-color support (see
`has_extended_color_support`).

> *Added in next*
