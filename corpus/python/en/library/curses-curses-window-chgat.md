---
id: "python-en-function-curses-window-chgat"
language: "python"
lang: "en"
category: "function"
name: "window.chgat"
signature: "window.chgat(attr)"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.chgat"
license: "PSF"
updated: "2026-10-01"
---

# window.chgat

Set the attributes of *num* characters at the current cursor position, or at
position `(y, x)` if supplied. If *num* is not given or is `-1`,
the attribute will be set on all the characters to the end of the line.  This
function moves cursor to position `(y, x)` if supplied. The changed line
will be touched using the `touchline` method so that the contents will
be redisplayed by the next window refresh.
