---
id: "python-en-function-curses-scr_init"
language: "python"
lang: "en"
category: "function"
name: "scr_init"
signature: "scr_init(filename)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.scr_init"
license: "PSF"
updated: "2026-10-01"
---

# scr_init

Initialize the assumed contents of the terminal from *filename*, which must
have been written by `scr_dump`.  Use it when the terminal already
displays those contents, for example after another program has drawn the
screen, so that curses does not redraw what is already there.

> *Added in next*
