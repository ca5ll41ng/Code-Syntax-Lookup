---
id: "python-en-function-tkinter-optionmenu"
language: "python"
lang: "en"
category: "function"
name: "OptionMenu"
signature: "OptionMenu(master, variable, value, *values, **kwargs)"
directive: "class"
module: "tkinter"
source_url: "https://docs.python.org/3/library/tkinter.html#tkinter.OptionMenu"
license: "PSF"
updated: "2026-10-01"
---

# OptionMenu

A helper subclass of `Menubutton` that displays a pop-up menu of
mutually exclusive choices.
*variable* is a `Variable` kept in sync with the selection, *value*
is the initial choice, and *values* are the remaining menu entries.
The keyword argument *command* may be given a callback that is invoked with
the selected value, and the keyword argument *name* sets the Tk widget name.
Other keyword arguments are passed to the underlying `Menubutton`
and may override its default appearance.

method:: destroy()

> *Changed in 3.14*: Added support for the *name* keyword argument.

> *Changed in next*: Other :class:`Menubutton` options can now be passed as keyword arguments.
