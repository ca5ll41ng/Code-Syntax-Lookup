---
id: "python-en-function-curses-ascii-ctrl"
language: "python"
lang: "en"
category: "function"
name: "ctrl"
signature: "ctrl(c)"
directive: "function"
module: "curses.ascii"
source_url: "https://docs.python.org/3/library/curses.ascii.html#curses.ascii.ctrl"
license: "PSF"
updated: "2026-10-01"
---

# ctrl

Return the control character corresponding to the given ASCII character (the
character bit value is bitwise-anded with 0x1f).  A non-ASCII character has no
control character and is returned unchanged.

> *Changed in next*: A non-ASCII argument is now returned unchanged instead of masked to a control character.
