---
id: "python-en-function-curses-window-getkey"
language: "python"
lang: "en"
category: "function"
name: "window.getkey"
signature: "window.getkey([y, x])"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.getkey"
license: "PSF"
updated: "2026-10-01"
---

# window.getkey

Read a key press as `getch` does, but return it as a `str`:
an ordinary key as a one-character string, the byte decoded as Latin-1,
and a special key as its name, such as `'KEY_UP'` (see `keyname`).
Raise `error` instead of returning `-1` if there is no input.
