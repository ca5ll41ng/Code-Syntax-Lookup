---
id: "python-en-function-curses-free_pair"
language: "python"
lang: "en"
category: "function"
name: "free_pair"
signature: "free_pair(pair_number)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.free_pair"
license: "PSF"
updated: "2026-10-01"
---

# free_pair

Free the color pair *pair_number*, which must have been allocated by
`alloc_pair`.  The pair must not be in use.

This function is only available if Python was built against a wide-character
version of the underlying curses library with extended-color support (see
`has_extended_color_support`).

> *Added in next*
