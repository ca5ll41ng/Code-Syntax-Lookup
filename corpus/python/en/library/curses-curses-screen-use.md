---
id: "python-en-function-curses-screen-use"
language: "python"
lang: "en"
category: "function"
name: "screen.use"
signature: "screen.use(func, /, *args, **kwargs)"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.screen.use"
license: "PSF"
updated: "2026-10-01"
---

# screen.use

Call `func(screen, *args, **kwargs)` with the lock of the screen held,
and return its result.
This provides automatic protection for the screen
against concurrent access from another thread.

Availability: if the underlying curses library provides `use_screen()`.

> *Added in next*
