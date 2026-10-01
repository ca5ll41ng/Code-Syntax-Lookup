---
id: "python-en-function-curses-window-attr_get"
language: "python"
lang: "en"
category: "function"
name: "window.attr_get"
signature: "window.attr_get()"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.attr_get"
license: "PSF"
updated: "2026-10-01"
---

# window.attr_get

Return the window's current rendition as a `(attrs, pair)` tuple,
where *attrs* is the set of attributes and *pair* is the color pair number.

Unlike `attron` and friends, which take packed `A_*` attributes,
this method and the other `attr_*` methods work with the
`WA_* attributes` and keep the color pair as a
separate number, which lets them use color pairs that do not fit alongside
the attributes in a single value.

> *Added in next*
