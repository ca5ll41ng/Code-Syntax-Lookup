---
id: "python-en-function-curses-window-noutrefresh"
language: "python"
lang: "en"
category: "function"
name: "window.noutrefresh"
signature: "window.noutrefresh()"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.noutrefresh"
license: "PSF"
updated: "2026-10-01"
---

# window.noutrefresh

Mark for refresh but wait.  This function updates the data structure
representing the desired state of the window, but does not force an update of
the physical screen.  To accomplish that, call  `doupdate`.

The 6 arguments can only be specified, and are then required, when the window
is a pad created with `newpad`; they have the same meaning as for
`refresh`.
