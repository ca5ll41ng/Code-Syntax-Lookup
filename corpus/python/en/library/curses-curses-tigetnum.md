---
id: "python-en-function-curses-tigetnum"
language: "python"
lang: "en"
category: "function"
name: "tigetnum"
signature: "tigetnum(capname)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.tigetnum"
license: "PSF"
updated: "2026-10-01"
---

# tigetnum

Return the value of the numeric capability corresponding to the terminfo
capability name *capname* as an integer.  Return the value `-2` if *capname* is not a
numeric capability, or `-1` if it is canceled or absent from the terminal
description.

`setupterm` (or `initscr`) must be called first.
