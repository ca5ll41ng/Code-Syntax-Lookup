---
id: "python-en-function-curses-window-get_wstr"
language: "python"
lang: "en"
category: "function"
name: "window.get_wstr"
signature: "window.get_wstr()"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.get_wstr"
license: "PSF"
updated: "2026-10-01"
---

# window.get_wstr

Read a line of input from the user, with primitive line editing capacity,
after moving the cursor to *y*, *x* if specified.
Return it as a `str`, without the terminating newline.
At most *n* characters are read;
*n* defaults to and cannot exceed 2047.

This is the wide-character variant of `getstr`.

> *Added in next*
