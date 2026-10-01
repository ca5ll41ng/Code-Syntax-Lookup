---
id: "python-en-function-tkinter-xview"
language: "python"
lang: "en"
category: "function"
name: "XView"
signature: "XView()"
directive: "class"
module: "tkinter"
source_url: "https://docs.python.org/3/library/tkinter.html#tkinter.XView"
license: "PSF"
updated: "2026-10-01"
---

# XView

Mix-in providing the horizontal-scrolling interface shared by widgets such
as `Entry`, `Canvas`, `Listbox`, `Text` and
`Spinbox`.
A widget's `xview` method is registered as the *command* of a
horizontal `Scrollbar`.

method:: xview(*args)

method:: xview_moveto(fraction)

method:: xview_scroll(number, what)
