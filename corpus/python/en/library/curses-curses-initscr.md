---
id: "python-en-function-curses-initscr"
language: "python"
lang: "en"
category: "function"
name: "initscr"
signature: "initscr()"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.initscr"
license: "PSF"
updated: "2026-10-01"
---

# initscr

Initialize the library. Return a `window` object
which represents the whole screen.

See `setupterm` for a caveat about calling it before this function.

> **Note**
>
> If there is an error opening the terminal, the underlying curses library may
> cause the interpreter to exit.
>
