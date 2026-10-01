---
id: "python-en-function-tkinter-variable"
language: "python"
lang: "en"
category: "function"
name: "Variable"
signature: "Variable(master=None, value=None, name=None)"
directive: "class"
module: "tkinter"
source_url: "https://docs.python.org/3/library/tkinter.html#tkinter.Variable"
license: "PSF"
updated: "2026-10-01"
---

# Variable

The base class for the Tk variable wrappers.
A Tk variable is a value stored in the Tcl interpreter that can be linked to
widgets through their *variable* or *textvariable* options (see
`coupling-widget-variables`), so that changes propagate both ways:
updating the variable updates every widget bound to it, and a user editing
such a widget updates the variable.

*master* is the widget whose Tcl interpreter owns the variable; if omitted,
the default root window is used.
*value* is the initial value; if omitted, a type-specific default is used.
*name* is the name of the variable in the Tcl interpreter; if omitted, a
unique name of the form `'PY_VARnum'` is generated.
If *name* matches an existing variable and *value* is omitted, the existing
value is retained.

In most cases you should use one of the typed subclasses below --
`StringVar`, `IntVar`, `DoubleVar` or
`BooleanVar` -- rather than `Variable` directly.

> **Note**
>
> When a `Variable` is garbage collected, its Tcl variable is unset.
> Keep a reference to it for as long as a widget is linked to it, for example
> by storing it as an attribute rather than in a local variable.
> Otherwise Tk recreates the Tcl variable to keep the widget working, but it
> is never unset again, leaking one Tcl variable per dropped wrapper.
>

> *Changed in 3.10*: Two variables now compare equal (``==``) only when they have the same name, are of the same class, and belong to the same Tcl interpreter.

method:: get()

method:: initialize(value)

method:: set(value)

method:: trace_add(mode, callback)

method:: trace_remove(mode, cbname)

method:: trace_info()

method:: trace(mode, callback)

method:: trace_variable(mode, callback)

method:: trace_vdelete(mode, cbname)

method:: trace_vinfo()
