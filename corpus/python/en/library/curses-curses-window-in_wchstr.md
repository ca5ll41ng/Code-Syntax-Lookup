---
id: "python-en-function-curses-window-in_wchstr"
language: "python"
lang: "en"
category: "function"
name: "window.in_wchstr"
signature: "window.in_wchstr([n])"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.in_wchstr"
license: "PSF"
updated: "2026-10-01"
---

# window.in_wchstr

Read the styled cells of the window from the current cursor position,
or from *y*, *x* if specified, to the end of the line
or at most *n* cells if *n* is specified,
and return them as a `complexstr`.
Unlike `instr` and `in_wstr`, each cell keeps its attributes
and color pair, so the result can be written back unchanged
with `addstr`.

> *Added in next*
