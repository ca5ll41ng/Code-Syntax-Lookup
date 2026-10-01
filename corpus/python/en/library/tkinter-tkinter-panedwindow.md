---
id: "python-en-function-tkinter-panedwindow"
language: "python"
lang: "en"
category: "function"
name: "PanedWindow"
signature: "PanedWindow(master=None, cnf={}, **kw)"
directive: "class"
module: "tkinter"
source_url: "https://docs.python.org/3/library/tkinter.html#tkinter.PanedWindow"
license: "PSF"
updated: "2026-10-01"
---

# PanedWindow

A `PanedWindow` is a geometry-manager widget that arranges any
number of child *panes* in a row (when *orient* is `'horizontal'`) or a
column (when *orient* is `'vertical'`).
Each pane holds one widget, and each pair of adjacent panes is separated by
a movable *sash* that the user can drag with the mouse to resize the widgets
on either side of it.
Inherits from `Widget`.

The *orient* option selects the layout direction, *sashwidth* sets the width
of each sash and *sashrelief* its relief.
When *showhandle* is true a small handle is drawn on each sash that the user
can grab to drag it.
Refer to the Tk `panedwindow` manual page for the full list of options.

method:: add(child, **kw)

method:: forget(child)

method:: remove(child)

method:: panes()

method:: panecget(child, option)

method:: paneconfig(child, cnf=None, **kw)

method:: paneconfigure(child, cnf=None, **kw)

method:: identify(x, y)

method:: sash(*args)

method:: sash_coord(index)

method:: sash_mark(index)

method:: sash_place(index, x, y)

method:: proxy(*args)

method:: proxy_coord()

method:: proxy_forget()

method:: proxy_place(x, y)
