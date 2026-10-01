---
id: "python-en-function-tkinter-radiobutton"
language: "python"
lang: "en"
category: "function"
name: "Radiobutton"
signature: "Radiobutton(master=None, cnf={}, **kw)"
directive: "class"
module: "tkinter"
source_url: "https://docs.python.org/3/library/tkinter.html#tkinter.Radiobutton"
license: "PSF"
updated: "2026-10-01"
---

# Radiobutton

A `Radiobutton` widget displays a textual string, bitmap or image
together with a diamond or circular indicator, and selects one choice out of
several.
It has all the behavior of a simple button and, in addition, can be
selected: typically several radiobuttons share a single *variable*, and
selecting one sets that variable to the radiobutton's *value*; each
radiobutton also monitors the variable and automatically selects or
deselects itself when the variable changes.
Inherits from `Widget`.
In addition to the standard widget options, a radiobutton accepts the
options documented in the Tk `radiobutton` manual page, such as
*variable*, *value* and *command*.

method:: invoke()

method:: select()

method:: deselect()

method:: flash()
