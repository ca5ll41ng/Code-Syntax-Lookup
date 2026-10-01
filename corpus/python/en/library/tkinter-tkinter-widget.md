---
id: "python-en-function-tkinter-widget"
language: "python"
lang: "en"
category: "function"
name: "Widget"
signature: "Widget(master, widgetName, cnf={}, kw={}, extra=())"
directive: "class"
module: "tkinter"
source_url: "https://docs.python.org/3/library/tkinter.html#tkinter.Widget"
license: "PSF"
updated: "2026-10-01"
---

# Widget

Internal base class for the standard widgets.
It combines `BaseWidget` with the geometry-manager mix-ins
`Pack`, `Place` and `Grid`, so that every widget can be
managed by any of the three geometry managers.
The concrete widget classes (`Button`, `Label`, and so on)
derive from `Widget`.
