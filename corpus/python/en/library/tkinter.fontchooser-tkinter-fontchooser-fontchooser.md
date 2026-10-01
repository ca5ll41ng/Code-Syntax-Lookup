---
id: "python-en-function-tkinter-fontchooser-fontchooser"
language: "python"
lang: "en"
category: "function"
name: "FontChooser"
signature: "FontChooser(master=None, **options)"
directive: "class"
module: "tkinter.fontchooser"
source_url: "https://docs.python.org/3/library/tkinter.fontchooser.html#tkinter.fontchooser.FontChooser"
license: "PSF"
updated: "2026-10-01"
---

# FontChooser

The class implementing the font selection dialog.

*master* is the widget whose Tcl interpreter owns the dialog.
If omitted, it defaults to *parent* if that is given,
or to the default root window otherwise.

The supported configuration options are:

* *parent* --- the window to which the dialog and its virtual events are related.
  It defaults to the main window;
  on macOS the dialog is shown as a sheet attached to it,
  rather than as a free-standing panel.
* *title* --- the title of the dialog.
* *font* --- the font that is currently selected in the dialog.
* *command* --- a callback that is called
  with a `~tkinter.font.Font` object wrapping the selected font
  when the user selects a font.
* *visible* --- whether the dialog is currently displayed (read-only).

The *font* option accepts the forms supported by `tkinter.font.Font`.

method:: configure(**options)

method:: cget(option)

method:: show()

method:: hide()
