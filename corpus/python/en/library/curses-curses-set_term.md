---
id: "python-en-function-curses-set_term"
language: "python"
lang: "en"
category: "function"
name: "set_term"
signature: "set_term(screen, /)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.set_term"
license: "PSF"
updated: "2026-10-01"
---

# set_term

Make *screen*, a `screen` returned by
`newterm`, the current terminal,
and return the previously current screen.
Returns `None` if the previous screen was the one created by
`initscr`.
Raises `error` if *screen* has no terminal,
as is the case for a screen returned by `new_prescr`.

> *Added in next*
