---
id: "python-en-function-tkinter-basewidget"
language: "python"
lang: "en"
category: "function"
name: "BaseWidget"
signature: "BaseWidget(master, widgetName, cnf={}, kw={}, extra=())"
directive: "class"
module: "tkinter"
source_url: "https://docs.python.org/3/library/tkinter.html#tkinter.BaseWidget"
license: "PSF"
updated: "2026-10-01"
---

# BaseWidget

Internal base class for all widgets.
It inherits from `Misc` and adds the machinery that creates the
underlying Tk widget; application code normally uses `Widget` or a
concrete widget class rather than instantiating `BaseWidget`
directly.

method:: destroy()
