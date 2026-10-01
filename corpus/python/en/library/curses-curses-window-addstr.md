---
id: "python-en-function-curses-window-addstr"
language: "python"
lang: "en"
category: "function"
name: "window.addstr"
signature: "window.addstr(str[, attr])"
directive: "method"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.window.addstr"
license: "PSF"
updated: "2026-10-01"
---

# window.addstr

Paint the character string *str* at `(y, x)` with attributes
*attr*, overwriting anything previously on the display.

*str* may also be a `complexstr`, in which case each cell carries its
own attributes and color pair, so *attr* must not be given.  A
`complexstr` obtained from `in_wchstr` is written back
unchanged.

> **Note**
>
> * Writing outside the window, subwindow, or pad raises `curses.error`.
>   Attempting to write to the lower-right corner of a window, subwindow,
>   or pad will cause an exception to be raised after the string is printed.
>
> * A bug in ncurses, the backend for this Python module, could cause
>   segfaults when resizing windows.  This was fixed in ncurses-6.1-20190511.
>   If you are stuck with an earlier ncurses, you can avoid triggering it by
>   not calling `addstr` with a *str* that has embedded newlines;
>   instead, call `addstr` separately for each line.
>

> *Changed in next*: *str* may now also be a :class:`complexstr`, as described above.
