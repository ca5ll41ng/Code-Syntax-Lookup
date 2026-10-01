---
id: "python-en-function-curses-slk_init"
language: "python"
lang: "en"
category: "function"
name: "slk_init"
signature: "slk_init(fmt=0)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.slk_init"
license: "PSF"
updated: "2026-10-01"
---

# slk_init

Reserve a screen line for the soft labels and choose their layout.  *fmt*
selects the arrangement: `0` for 3-2-3 (eight labels), `1` for 4-4
(eight labels).  Where the underlying curses library supports them, `2`
gives 4-4-4 (twelve labels) and `3` gives 4-4-4 with an index line.

Must be called before `initscr` or `newterm`,
and affects only the screen created next.

> *Added in next*
