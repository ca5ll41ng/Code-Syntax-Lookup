---
id: "python-en-function-tkinter-callwrapper"
language: "python"
lang: "en"
category: "function"
name: "CallWrapper"
signature: "CallWrapper(func, subst, widget)"
directive: "class"
module: "tkinter"
source_url: "https://docs.python.org/3/library/tkinter.html#tkinter.CallWrapper"
license: "PSF"
updated: "2026-10-01"
---

# CallWrapper

Internal helper that wraps a Python callback so that it can be invoked from
Tcl.
*func* is the Python function, *subst* is an optional function that
pre-processes the Tcl arguments, and *widget* is the widget used for error
reporting.
Instances are created automatically by `Misc.register`; this class is
not normally used directly.
