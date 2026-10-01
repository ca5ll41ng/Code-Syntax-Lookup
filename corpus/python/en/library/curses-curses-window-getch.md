---
id: "python-en-function-curses-window-getch"
language: "python"
lang: "en"
category: "function"
name: "window.getch"
signature: "window.getch([y, x])"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.getch"
license: "PSF"
updated: "2026-10-01"
---

# window.getch

Read a key press, after moving the cursor to *y*, *x* if specified,
and return it as an integer.
The window is refreshed first if it is not a pad and was modified since
the last refresh.
Wait until a key is pressed, or return `-1` if the read is non-blocking
or times out (see `nodelay` and `timeout`).

An ordinary key is returned as the code of a single byte of its encoding
in the current locale,
so a character encoded with several bytes takes several calls.
For example, in a UTF-8 locale `'é'` is read as `195`, then `169`.
Use `get_wch` to read it as a single character.

In keypad mode (see `keypad`) function keys and other special keys
are returned as one of the `KEY_* constants`,
which cannot be mistaken for an ordinary key.
Otherwise, or if their escape sequence does not arrive in time
(see `notimeout` and `set_escdelay`),
their bytes are returned one at a time.

In echo mode (see `echo`) the key is added to the window as by
`addch`; special keys are not echoed.
