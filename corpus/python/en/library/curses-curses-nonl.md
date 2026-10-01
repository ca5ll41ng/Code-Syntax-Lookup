---
id: "python-en-function-curses-nonl"
language: "python"
lang: "en"
category: "function"
name: "nonl"
signature: "nonl()"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.nonl"
license: "PSF"
updated: "2026-10-01"
---

# nonl

Leave newline mode.  Disable translation of return into newline on input, and
disable low-level translation of newline into newline/return on output (but this
does not change the behavior of `addch('\n')`, which always does the
equivalent of return and line feed on the virtual screen).  With translation
off, curses can sometimes speed up vertical motion a little; also, it will be
able to detect the return key on input.
