---
id: "python-en-function-curses-curs_set"
language: "python"
lang: "en"
category: "function"
name: "curs_set"
signature: "curs_set(visibility)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.curs_set"
license: "PSF"
updated: "2026-10-01"
---

# curs_set

Set the cursor state.  *visibility* can be set to `0`, `1`, or `2`, for invisible,
normal, or very visible.  If the terminal supports the visibility requested, return the
previous cursor state; otherwise raise an exception.  On many
terminals, the "visible" mode is an underline cursor and the "very visible" mode
is a block cursor.
