---
id: "python-en-function-curses-textbox"
language: "python"
lang: "en"
category: "function"
name: "Textbox"
signature: "Textbox(win, insert_mode=False)"
directive: "class"
module: "curses"
source_url: "https://docs.python.org/3/library/curses.html#curses.Textbox"
license: "PSF"
updated: "2026-10-01"
---

# Textbox

Return a textbox widget object.  The *win* argument should be a curses
`window` object in which the textbox is to
be contained.  If *insert_mode* is true, the textbox inserts typed
characters, shifting existing text to the right, rather than overwriting it.
The edit cursor of the textbox is initially located at the
upper-left corner of the containing window, with coordinates `(0, 0)`.
The instance's `stripspaces` flag is initially on.

> *Changed in next*: Entering and reading back the full Unicode range, including combining characters, is now supported when curses is built with wide-character support.

`Textbox` objects have the following methods:

method:: edit(validate=None)

method:: do_command(ch)

method:: gather()

attribute:: stripspaces
