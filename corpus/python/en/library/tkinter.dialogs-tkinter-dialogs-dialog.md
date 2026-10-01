---
id: "python-en-function-tkinter-dialogs-dialog"
language: "python"
lang: "en"
category: "function"
name: "Dialog"
signature: "Dialog(parent, title=None, *, use_ttk=False)"
directive: "class"
module: "tkinter.dialogs"
source_url: "https://docs.python.org/3/library/tkinter.dialogs.html#tkinter.dialogs.Dialog"
license: "PSF"
updated: "2026-10-01"
---

# Dialog

The base class for custom dialogs.
Instantiating it shows the dialog modally and returns once the user closes
it; the entered value is then available in the `result` attribute.
When *use_ttk* is false (the default), the dialog is built from the classic
`tkinter` widgets, modelled on the classic `tk_dialog`; when true,
from the themed `tkinter.ttk` widgets, modelled on the Tk message box.
The default is classic for compatibility, since the themed widgets set a
themed background that classic widgets added in `body` would not match.

> *Changed in next*: Added the *use_ttk* parameter.

attribute:: result

method:: body(master)

method:: buttonbox()

method:: validate()

method:: apply()

method:: destroy()
