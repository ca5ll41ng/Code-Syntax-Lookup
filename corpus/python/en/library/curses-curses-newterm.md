---
id: "python-en-function-curses-newterm"
language: "python"
lang: "en"
category: "function"
name: "newterm"
signature: "newterm(type=None, fd=None, infd=None, /)"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.newterm"
license: "PSF"
updated: "2026-10-01"
---

# newterm

Initialize a new terminal in addition to the one initialized by
`initscr`,
and return a `screen` for it.
This allows a program to drive more than one terminal.

*type* is the terminal name, as in `setupterm`;
if `None`, the value of the `TERM` environment variable is used.
*fd* and *infd* are the output and input files for the terminal:
either a file object or a file descriptor.
They default to `sys.stdout` and `sys.stdin`.

The new screen becomes the current one.
Use `set_term` to switch between screens.

See `setupterm` for a caveat about calling it before this function.

> *Added in next*
