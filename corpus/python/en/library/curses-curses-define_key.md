---
id: "python-en-function-curses-define_key"
language: "python"
lang: "en"
category: "function"
name: "define_key"
signature: "define_key(definition, keycode)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.define_key"
license: "PSF"
updated: "2026-10-01"
---

# define_key

Define an escape sequence *definition*, a string, as a key that generates
the key code *keycode*, so that `curses` interprets it like one of the
keys predefined in the terminal database.

If *definition* is `None`, any existing binding for *keycode* is removed.
If *keycode* is zero or negative, any existing binding for *definition* is
removed.

> *Added in next*
