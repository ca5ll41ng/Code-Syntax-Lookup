---
id: "python-en-function-tkinter-ttk-optionmenu"
language: "python"
lang: "en"
category: "function"
name: "OptionMenu"
signature: "OptionMenu(master, variable, default=None, *values, **kwargs)"
directive: "class"
module: "tkinter.ttk"
source_url: "https://docs.python.org/3/library/tkinter.ttk.html#tkinter.ttk.OptionMenu"
license: "PSF"
updated: "2026-10-01"
---

# OptionMenu

Ttk `OptionMenu` widget, a `Menubutton` that pops up a menu of
mutually exclusive choices.
*variable* is the variable that tracks the currently selected value,
*default* is the value to set initially, and *values* are the entries to
display in the menu.
A *command* keyword argument may be given to specify a callable that is
invoked with the selected value whenever the selection changes; the *style*
keyword argument sets the style used by the underlying menubutton; the
*direction* keyword argument sets where the menu is posted relative to the
menubutton (one of `'above'`, `'below'` (the default), `'left'`,
`'right'` or `'flush'`); and the *name* keyword argument sets the Tk
widget name.

method:: set_menu(default=None, *values)

method:: destroy()

> *Changed in 3.14*: Added support for the *name* keyword argument.
