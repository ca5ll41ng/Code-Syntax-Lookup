---
id: "python-en-function-tkinter-spinbox"
language: "python"
lang: "en"
category: "function"
name: "Spinbox"
signature: "Spinbox(master=None, cnf={}, **kw)"
directive: "class"
module: "tkinter"
source_url: "https://docs.python.org/3/library/tkinter.html#tkinter.Spinbox"
license: "PSF"
updated: "2026-10-01"
---

# Spinbox

A `Spinbox` widget is an `Entry`-like widget with a pair of
up/down arrow buttons that let the user step through a range of values in
addition to editing the value directly.
The set of values may be a numeric range given by the *from_*, *to* and
*increment* options, or an explicit list of strings given by the *values*
option (which takes precedence over the range).
Each time an arrow is invoked the *command* callback, if any, is called; the
*wrap* option controls whether stepping past either end of the range wraps
around to the other end; the *format* option specifies how numeric values
are formatted; and the *validate* option enables validation of the entered
text.
Inherits from `Widget` and `XView`.

With a non-integer *increment*, see `numeric values and the locale`.

Many of the methods take an *index* argument identifying a character in the
spinbox's string.
As described in the Tk `spinbox` manual page, *index* may be a numeric
index (counting from 0), `'anchor'` (the selection anchor point),
`'end'` (just after the last character), `'insert'` (the character just
after the insertion cursor), `'sel.first'` or `'sel.last'` (the ends of
the selection), or `@x` (the character covering pixel x-coordinate *x* in
the window).

method:: get()

method:: insert(index, s)

method:: delete(first, last=None)

method:: icursor(index)

method:: index(index)

method:: bbox(index)

method:: identify(x, y)

method:: invoke(element)

method:: scan(*args)

method:: scan_mark(x)

method:: scan_dragto(x)

method:: selection(*args)

method:: selection_adjust(index)

method:: selection_clear()

method:: selection_element(element=None)

method:: selection_from(index)

method:: selection_present()

method:: selection_range(start, end)

method:: selection_to(index)

method:: validate()
