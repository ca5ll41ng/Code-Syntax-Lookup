---
id: "python-en-function-curses-doupdate"
language: "python"
lang: "en"
category: "function"
name: "doupdate"
signature: "doupdate()"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.doupdate"
license: "PSF"
updated: "2026-10-01"
---

# doupdate

Update the physical screen.  The curses library keeps two data structures, one
representing the current physical screen contents and a virtual screen
representing the desired next state.  The `doupdate` function updates the
physical screen to match the virtual screen.

The virtual screen may be updated by a `~window.noutrefresh` call after write
operations such as `~window.addstr` have been performed on a window.  The normal
`~window.refresh` call is simply `noutrefresh` followed by `doupdate`;
if you have to update multiple windows, you can speed performance and perhaps
reduce screen flicker by issuing `noutrefresh` calls on all windows,
followed by a single `doupdate`.
