---
id: "python-en-function-curses-set_escdelay"
language: "python"
lang: "en"
category: "function"
name: "set_escdelay"
signature: "set_escdelay(ms)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.set_escdelay"
license: "PSF"
updated: "2026-10-01"
---

# set_escdelay

Sets the number of milliseconds to wait after reading an escape character,
to distinguish between an individual escape character entered on the
keyboard from escape sequences sent by cursor and function keys.

Depending on the curses library, the setting may apply to all screens,
not only to the current one.

> *Added in 3.9*
