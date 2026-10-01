---
id: "python-en-function-tkinter-checkbutton"
language: "python"
lang: "en"
category: "function"
name: "Checkbutton"
signature: "Checkbutton(master=None, cnf={}, **kw)"
directive: "class"
module: "tkinter"
source_url: "https://docs.python.org/3/library/tkinter.html#tkinter.Checkbutton"
license: "PSF"
updated: "2026-10-01"
---

# Checkbutton

A `Checkbutton` widget displays a textual string, bitmap or image
together with a square indicator, and toggles a boolean selection when
pressed.
It has all the behavior of a simple button and, in addition, can be
selected: when selected the indicator is drawn with a check mark and the
associated variable is set to the `onvalue`, and when deselected the
indicator is drawn empty and the variable is set to the `offvalue`.
Inherits from `Widget`.
In addition to the standard widget options, a checkbutton accepts the
options documented in the Tk `checkbutton` manual page, such as
*variable*, *onvalue*, *offvalue* and *command*.

method:: invoke()

method:: select()

method:: deselect()

method:: toggle()

method:: flash()
