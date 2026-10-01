---
id: "python-en-function-curses-window-use"
language: "python"
lang: "en"
category: "function"
name: "window.use"
signature: "window.use(func, /, *args, **kwargs)"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.use"
license: "PSF"
updated: "2026-10-01"
---

# window.use

Call `func(window, *args, **kwargs)` with the lock of the window held,
and return its result.
This provides automatic protection for the window
against concurrent access from another thread.

Availability: if the underlying curses library provides `use_window()`.

> *Added in next*
