---
id: "python-en-function-tkinter-toplevel"
language: "python"
lang: "en"
category: "function"
name: "Toplevel"
signature: "Toplevel(master=None, cnf={}, **kw)"
directive: "class"
module: "tkinter"
source_url: "https://docs.python.org/3/library/tkinter.html#tkinter.Toplevel"
license: "PSF"
updated: "2026-10-01"
---

# Toplevel

A `Toplevel` widget is a top-level window, similar to a
`Frame` except that its X parent is the root window of a screen
rather than its logical parent.
Its primary purpose is to serve as a container for dialog boxes and other
collections of widgets; its only visible features are its background and an
optional 3-D border.
Notable options include *menu*, which installs a `Menu` as the
window's menubar.
Inherits from `BaseWidget` and `Wm`, so a toplevel is managed
by the window manager.
Refer to the Tk `toplevel` manual page for the full list of options.
