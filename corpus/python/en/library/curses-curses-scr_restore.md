---
id: "python-en-function-curses-scr_restore"
language: "python"
lang: "en"
category: "function"
name: "scr_restore"
signature: "scr_restore(filename)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.scr_restore"
license: "PSF"
updated: "2026-10-01"
---

# scr_restore

Set the virtual screen to the contents of *filename*, which must have been
written by `scr_dump`.  The next call to `doupdate` or
`window.refresh` restores the screen to those contents.

> *Added in next*
