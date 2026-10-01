---
id: "python-en-function-curses-getmouse"
language: "python"
lang: "en"
category: "function"
name: "getmouse"
signature: "getmouse()"
directive: "function"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.getmouse"
license: "PSF"
updated: "2026-10-01"
---

# getmouse

After `~window.getch` returns `KEY_MOUSE` to signal a mouse event, this
method should be called to retrieve the queued mouse event, represented as a
5-tuple `(id, x, y, z, bstate)`. *id* is an ID value used to distinguish
multiple devices, and *x*, *y*, *z* are the event's coordinates.  (*z* is
currently unused.)  *bstate* is an integer value whose bits will be set to
indicate the type of event, and will be the bitwise OR of one or more of the
following constants, where *n* is the button number from 1 to 5:
`BUTTONn_PRESSED`, `BUTTONn_RELEASED`, `BUTTONn_CLICKED`,
`BUTTONn_DOUBLE_CLICKED`, `BUTTONn_TRIPLE_CLICKED`,
`BUTTON_SHIFT`, `BUTTON_CTRL`, `BUTTON_ALT`.

> *Changed in 3.10*: The ``BUTTON5_*`` constants are now exposed if they are provided by the underlying curses library.
