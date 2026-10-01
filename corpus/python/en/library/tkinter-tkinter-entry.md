---
id: "python-en-function-tkinter-entry"
language: "python"
lang: "en"
category: "function"
name: "Entry"
signature: "Entry(master=None, cnf={}, **kw)"
directive: "class"
module: "tkinter"
source_url: "https://docs.python.org/3/library/tkinter.html#tkinter.Entry"
license: "PSF"
updated: "2026-10-01"
---

# Entry

An `Entry` widget displays a single line of text and lets the user
edit it.
Inherits from `Widget` and `XView`; since entries can hold
strings too long to fit in the window, they support horizontal scrolling
through `~XView.xview`.

In addition to the standard widget options, an entry accepts the options
documented in the Tk `entry` manual page.
Notable ones are *textvariable* (the name of a variable kept in sync with
the entry's contents), *show* (if set, each character is displayed as the
given character rather than its true value, useful for password entry),
*validate* and *validatecommand* (which together let a callback accept or
reject edits), and *state* (one of `'normal'`, `'disabled'` or
`'readonly'`).

Many of the methods below take an *index* argument that selects a character
in the entry's string.
As described in the Tk `entry` manual page, *index* may be a number
(counting from 0), `'insert'` (the character just after the insertion
cursor), `'end'` (just after the last character), `'anchor'` (the
selection anchor point), `'sel.first'` and `'sel.last'` (the ends of the
selection), or `@x` (the character covering pixel x-coordinate *x* in the
window).
Out-of-range indices are rounded to the nearest legal value.

method:: delete(first, last=None)

method:: get()

method:: insert(index, string)

method:: icursor(index)

method:: index(index)

method:: select_adjust(index)

method:: selection_adjust(index)

method:: select_clear()

method:: selection_clear()

method:: select_from(index)

method:: selection_from(index)

method:: select_present()

method:: selection_present()

method:: select_range(start, end)

method:: selection_range(start, end)

method:: select_to(index)

method:: selection_to(index)

method:: scan_mark(x)

method:: scan_dragto(x)

method:: validate()
