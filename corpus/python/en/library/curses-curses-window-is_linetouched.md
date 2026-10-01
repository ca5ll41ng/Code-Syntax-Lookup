---
id: "python-en-function-curses-window-is_linetouched"
language: "python"
lang: "en"
category: "function"
name: "window.is_linetouched"
signature: "window.is_linetouched(line)"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.is_linetouched"
license: "PSF"
updated: "2026-10-01"
---

# window.is_linetouched

Return `True` if the specified line was modified since the last call to
`refresh`; otherwise return `False`.  Raise a `curses.error`
exception if *line* is not valid for the given window.
