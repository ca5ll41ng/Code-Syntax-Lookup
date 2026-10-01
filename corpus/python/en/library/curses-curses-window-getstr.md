---
id: "python-en-function-curses-window-getstr"
language: "python"
lang: "en"
category: "function"
name: "window.getstr"
signature: "window.getstr()"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.getstr"
license: "PSF"
updated: "2026-10-01"
---

# window.getstr

Read a line of input from the user, with primitive line editing capacity,
after moving the cursor to *y*, *x* if specified.
Return it as a bytes object, in the encoding of the current locale
and without the terminating newline.
At most *n* bytes are read;
*n* defaults to and cannot exceed 2047.

Use `get_wstr` to read the input as a `str`.

> *Changed in 3.14*: The maximum value for *n* was increased from 1023 to 2047.
