---
id: "python-en-function-curses-window-in_wstr"
language: "python"
lang: "en"
category: "function"
name: "window.in_wstr"
signature: "window.in_wstr([n])"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.in_wstr"
license: "PSF"
updated: "2026-10-01"
---

# window.in_wstr

Read the text of the window from the current cursor position,
or from *y*, *x* if specified, to the end of the line
or at most *n* characters if *n* is specified,
and return it as a `str`.
Attributes and color pairs are stripped;
use `in_wchstr` to read them too.

This is the wide-character variant of `instr`.

> *Added in next*
