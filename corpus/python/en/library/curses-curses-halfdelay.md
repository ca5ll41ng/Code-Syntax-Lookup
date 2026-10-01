---
id: "python-en-function-curses-halfdelay"
language: "python"
lang: "en"
category: "function"
name: "halfdelay"
signature: "halfdelay(tenths)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.halfdelay"
license: "PSF"
updated: "2026-10-01"
---

# halfdelay

Used for half-delay mode, which is similar to cbreak mode in that characters
typed by the user are immediately available to the program. However, after
blocking for *tenths* tenths of seconds, raise an exception if nothing has
been typed.  The value of *tenths* must be a number between `1` and `255`.  Use
`nocbreak` to leave half-delay mode.
