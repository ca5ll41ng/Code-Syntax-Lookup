---
id: "python-en-function-curses-setupterm"
language: "python"
lang: "en"
category: "function"
name: "setupterm"
signature: "setupterm(term=None, fd=-1)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.setupterm"
license: "PSF"
updated: "2026-10-01"
---

# setupterm

Initialize the terminal.  *term* is a string giving
the terminal name, or `None`; if omitted or `None`, the value of the
`TERM` environment variable will be used.  *fd* is the
file descriptor to which any initialization sequences will be sent; if not
supplied or `-1`, the file descriptor for `sys.stdout` will be used.

Raise a `curses.error` if the terminal could not be found or its
terminfo database entry could not be read.  If the terminal has already
been initialized, this function has no effect.

> **Note**
>
> Calling `initscr` or `newterm` after `setupterm`
> leaks the terminal that `setupterm` allocated:
> the curses library keeps only a single current terminal
> and does not free the previously allocated one.
>
