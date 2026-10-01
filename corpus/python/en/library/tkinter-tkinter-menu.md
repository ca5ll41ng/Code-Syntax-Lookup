---
id: "python-en-function-tkinter-menu"
language: "python"
lang: "en"
category: "function"
name: "Menu"
signature: "Menu(master=None, cnf={}, **kw)"
directive: "class"
module: "tkinter"
source_url: "https://docs.python.org/3/library/tkinter.html#tkinter.Menu"
license: "PSF"
updated: "2026-10-01"
---

# Menu

A `Menu` widget displays a column of entries, each of which may be a
command, a checkbutton, a radiobutton, a cascade (which posts an associated
submenu) or a separator.
Menus are used as the menubar of a toplevel window, as pulldown menus posted
from a cascade entry or menubutton, and as popup menus.
Inherits from `Widget`.

Many of the entry methods take an *index* argument that selects which entry
to operate on.
As described in the Tk `menu` manual page, *index* may be a numeric index
(counting from 0 at the top), `'active'` (the currently active entry),
`'end'` or `'last'` (the bottommost entry), `'none'` (no entry at all,
written `{}` in Tcl), `@y` (the entry covering pixel y-coordinate *y* in
the menu window), or a pattern matched against the labels of the entries
from the top down.

method:: add(itemType, cnf={}, **kw)

method:: add_cascade(cnf={}, **kw)

method:: add_checkbutton(cnf={}, **kw)

method:: add_command(cnf={}, **kw)

method:: add_radiobutton(cnf={}, **kw)

method:: add_separator(cnf={}, **kw)

method:: insert(index, itemType, cnf={}, **kw)

method:: insert_cascade(index, cnf={}, **kw)

method:: insert_checkbutton(index, cnf={}, **kw)

method:: insert_command(index, cnf={}, **kw)

method:: insert_radiobutton(index, cnf={}, **kw)

method:: insert_separator(index, cnf={}, **kw)

method:: delete(index1, index2=None)

method:: entrycget(index, option)

method:: entryconfig(index, cnf=None, **kw)

method:: entryconfigure(index, cnf=None, **kw)

method:: index(index)

method:: type(index)

method:: activate(index)

method:: invoke(index)

method:: post(x, y)

method:: postcascade(index)

method:: tk_popup(x, y, entry='')

method:: unpost()

method:: xposition(index)

method:: yposition(index)
