---
id: "python-en-function-curses-mouseinterval"
language: "python"
lang: "en"
category: "function"
name: "mouseinterval"
signature: "mouseinterval(interval)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.mouseinterval"
license: "PSF"
updated: "2026-10-01"
---

# mouseinterval

Set the maximum time in milliseconds that can elapse between press and release
events in order for them to be recognized as a click, and return the previous
interval value.  The default value is 166 milliseconds, or one sixth of a second.
Use a negative *interval* to obtain the interval value without changing it.
