---
id: "python-en-function-curses-window-get_wch"
language: "python"
lang: "en"
category: "function"
name: "window.get_wch"
signature: "window.get_wch([y, x])"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.get_wch"
license: "PSF"
updated: "2026-10-01"
---

# window.get_wch

Read a key press, after moving the cursor to *y*, *x* if specified,
and return it as a one-character `str`.
The window is refreshed first if it is not a pad and was modified since
the last refresh.
Wait until a key is pressed, or raise `error` if the read is
non-blocking or times out (see `nodelay` and `timeout`).

In keypad mode (see `keypad`) function keys and other special keys
are returned as one of the `KEY_* constants`,
an integer.
Otherwise, or if their escape sequence does not arrive in time
(see `notimeout` and `set_escdelay`),
their characters are returned one at a time.

In echo mode (see `echo`) the key is added to the window as by
`addch`; special keys are not echoed.

> *Added in 3.3*

> *Changed in next*: Also available on a narrow build, where only a character representable as a single byte (an 8-bit locale) can be returned.
