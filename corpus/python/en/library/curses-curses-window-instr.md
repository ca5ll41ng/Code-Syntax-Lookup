---
id: "python-en-function-curses-window-instr"
language: "python"
lang: "en"
category: "function"
name: "window.instr"
signature: "window.instr([n])"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.instr"
license: "PSF"
updated: "2026-10-01"
---

# window.instr

Read the text of the window from the current cursor position,
or from *y*, *x* if specified, to the end of the line
or at most *n* bytes if *n* is specified,
and return it as a bytes object, in the encoding of the current locale.
Attributes and color pairs are stripped;
use `in_wchstr` to read them too.
A character not representable in the encoding cannot be returned;
use `in_wstr` for those.

> *Changed in 3.14*: The maximum value for *n* was increased from 1023 to 2047.

> *Changed in next*: *n* is no longer limited to 2047.
