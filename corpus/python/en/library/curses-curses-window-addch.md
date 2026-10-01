---
id: "python-en-function-curses-window-addch"
language: "python"
lang: "en"
category: "function"
name: "window.addch"
signature: "window.addch(ch[, attr])"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.addch"
license: "PSF"
updated: "2026-10-01"
---

# window.addch

Paint character *ch* at `(y, x)` with attributes *attr*, overwriting any
character previously painted at that location.  By default, the character
position and attributes are the current settings for the window object.

*ch* may be a single character, optionally followed by combining
characters, that together occupy one character cell.

> **Note**
>
> Writing outside the window, subwindow, or pad raises a `curses.error`.
> Attempting to write to the lower-right corner of a window, subwindow,
> or pad will cause an exception to be raised after the character is printed.
>

> *Changed in next*: A character may now be given as a string of a base character followed by combining characters, instead of only a single character, or as a :class:`complexchar` cell.
