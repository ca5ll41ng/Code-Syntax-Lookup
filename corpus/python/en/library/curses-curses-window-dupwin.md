---
id: "python-en-function-curses-window-dupwin"
language: "python"
lang: "en"
category: "function"
name: "window.dupwin"
signature: "window.dupwin()"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.dupwin"
license: "PSF"
updated: "2026-10-01"
---

# window.dupwin

Return a new window that is an exact duplicate of the window: it has the same
size, position, contents and attributes.  Unlike a window created by
`subwin` or `derwin`, the duplicate is independent of the
original -- it has its own cell buffer, so later changes to one do not affect
the other.

> *Added in next*
