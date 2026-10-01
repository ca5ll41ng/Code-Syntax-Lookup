---
id: "python-en-function-curses-cbreak"
language: "python"
lang: "en"
category: "function"
name: "cbreak"
signature: "cbreak()"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.cbreak"
license: "PSF"
updated: "2026-10-01"
---

# cbreak

Enter cbreak mode.  In cbreak mode (sometimes called "rare" mode) normal tty
line buffering is turned off and characters are available to be read one by one.
However, unlike raw mode, special characters (interrupt, quit, suspend, and flow
control) retain their effects on the tty driver and calling program.  Calling
first `raw` then `cbreak` leaves the terminal in cbreak mode.
