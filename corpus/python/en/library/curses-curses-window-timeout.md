---
id: "python-en-function-curses-window-timeout"
language: "python"
lang: "en"
category: "function"
name: "window.timeout"
signature: "window.timeout(delay)"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.timeout"
license: "PSF"
updated: "2026-10-01"
---

# window.timeout

Set blocking or non-blocking read behavior for the window.  If *delay* is
negative, blocking read is used (which will wait indefinitely for input).  If
*delay* is zero, then non-blocking read is used, and `getch` will
return `-1` if no input is waiting.  If *delay* is positive, then
`getch` will block for *delay* milliseconds, and return `-1` if there is
still no input at the end of that time.
