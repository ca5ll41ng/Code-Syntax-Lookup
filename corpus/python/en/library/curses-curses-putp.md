---
id: "python-en-function-curses-putp"
language: "python"
lang: "en"
category: "function"
name: "putp"
signature: "putp(str)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.putp"
license: "PSF"
updated: "2026-10-01"
---

# putp

Equivalent to `tputs(str, 1, putchar)`; emit the value of a specified
terminfo capability, a bytes object, for the current terminal.
Note that the output of `putp` always goes to standard output.

`setupterm` (or `initscr`) must be called first.
