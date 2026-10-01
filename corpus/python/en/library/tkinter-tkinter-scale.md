---
id: "python-en-function-tkinter-scale"
language: "python"
lang: "en"
category: "function"
name: "Scale"
signature: "Scale(master=None, cnf={}, **kw)"
directive: "class"
module: "tkinter"
source_url: "https://docs.python.org/3/library/tkinter.html#tkinter.Scale"
license: "PSF"
updated: "2026-10-01"
---

# Scale

A `Scale` widget lets the user select a numerical value by moving a
slider along a trough.
It can be oriented vertically or horizontally and can optionally display a
label and the current value.
Inherits from `Widget`.

In addition to the standard widget options, a scale accepts the options
documented in the Tk `scale` manual page, such as *from_*, *to*,
*resolution*, *orient*, *tickinterval*, *variable* and *command*.
As elsewhere in `tkinter`, the leading `-` of the Tk option name is
dropped; *from* is spelled `from_` because `from` is a Python
keyword.

With a non-integer *resolution*, see `numeric values and the locale`.

method:: get()

method:: set(value)

method:: coords(value=None)

method:: identify(x, y)
