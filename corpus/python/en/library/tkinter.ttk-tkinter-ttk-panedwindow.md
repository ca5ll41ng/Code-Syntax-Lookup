---
id: "python-en-function-tkinter-ttk-panedwindow"
language: "python"
lang: "en"
category: "function"
name: "Panedwindow"
signature: "Panedwindow(master=None, **kw)"
directive: "class"
module: "tkinter.ttk"
source_url: "https://docs.python.org/3/library/tkinter.ttk.html#tkinter.ttk.Panedwindow"
license: "PSF"
updated: "2026-10-01"
---

# Panedwindow

Ttk `Panedwindow` widget, displays a number of subwindows stacked
either vertically or horizontally.
The user may adjust the relative sizes of the subwindows by dragging the
sash between panes.
It is the themed counterpart of `tkinter.PanedWindow` and inherits
the common widget methods from `Widget`, as well as the `add`
and `panes` methods from `tkinter.PanedWindow`.

method:: insert(pos, child, **kw)

method:: forget(child)

method:: pane(pane, option=None, **kw)

method:: sashpos(index, newpos=None)
