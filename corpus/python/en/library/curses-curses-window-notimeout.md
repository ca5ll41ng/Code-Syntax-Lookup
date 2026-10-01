---
id: "python-en-function-curses-window-notimeout"
language: "python"
lang: "en"
category: "function"
name: "window.notimeout"
signature: "window.notimeout(flag)"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.notimeout"
license: "PSF"
updated: "2026-10-01"
---

# window.notimeout

If *flag* is `True`, escape sequences will not be timed out.

If *flag* is `False`, after a few milliseconds, an escape sequence will not be
interpreted, and will be left in the input stream as is.
