---
id: "python-en-function-tkinter-scrollbar"
language: "python"
lang: "en"
category: "function"
name: "Scrollbar"
signature: "Scrollbar(master=None, cnf={}, **kw)"
directive: "class"
module: "tkinter"
source_url: "https://docs.python.org/3/library/tkinter.html#tkinter.Scrollbar"
license: "PSF"
updated: "2026-10-01"
---

# Scrollbar

A `Scrollbar` widget displays a slider and two arrows that let the
user scroll an associated widget, such as a `Listbox`, `Text`,
`Canvas` or `Entry`.
It is connected to the scrolled widget by setting that widget's
*xscrollcommand* or *yscrollcommand* option to the scrollbar's `set`
method, and the scrollbar's *command* option to the scrolled widget's
`~XView.xview` or `~YView.yview` method.
Inherits from `Widget`.

method:: get()

method:: set(first, last)

method:: activate(index=None)

method:: delta(deltax, deltay)

method:: fraction(x, y)

method:: identify(x, y)
