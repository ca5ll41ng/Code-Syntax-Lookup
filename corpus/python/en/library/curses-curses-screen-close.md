---
id: "python-en-function-curses-screen-close"
language: "python"
lang: "en"
category: "function"
name: "screen.close"
signature: "screen.close()"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.screen.close"
license: "PSF"
updated: "2026-10-01"
---

# screen.close

Detach the screen's standard window,
breaking the reference cycle between them
so the screen can be reclaimed promptly instead of waiting for a
garbage collection.
Afterwards `~screen.stdscr` is `None`
and the window it returned earlier can no longer be used.
The screen's resources are released
once it and all its windows are no longer referenced.

> *Added in next*
