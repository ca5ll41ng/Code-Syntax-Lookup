---
id: "python-en-function-tkinter-dialogs-simpledialog"
language: "python"
lang: "en"
category: "function"
name: "SimpleDialog"
signature: "SimpleDialog(master, text='', buttons=[], default=None, cancel=None, title=None, class_=None, *, bitmap=None, detail='', use_ttk=True)"
directive: "class"
module: "tkinter.dialogs"
source_url: "https://docs.python.org/3/library/tkinter.dialogs.html#tkinter.dialogs.SimpleDialog"
license: "PSF"
updated: "2026-10-01"
---

# SimpleDialog

A simple modal dialog that displays the message *text* above a row of push
buttons given by *buttons*, and returns the index of the button the user
presses.
Each entry of *buttons* is either a button label, or a mapping of button
options such as `{'text': 'OK', 'underline': 0}`; an `underline` option
makes `Alt` plus the underlined character invoke the button.
*default* is the index of the default button, activated by the Return key
when no button has the focus, *cancel* the index returned when the window is
closed through the window manager, *title* the window title, and *class_*
the Tk class name of the window.
*bitmap* is the name of a bitmap displayed beside the message
(for example `'warning'` or `'question'`); the standard names
`'error'`, `'info'`, `'question'` and `'warning'` are shown as
themed icons when *use_ttk* is true.
*detail* is a secondary message displayed below *text*.
When *use_ttk* is true (the default), the dialog is built from the themed
`tkinter.ttk` widgets, modelled on the Tk message box; when false, from
the classic `tkinter` widgets, modelled on `tk_dialog`.

> *Changed in next*: The dialog is now built from the themed :mod:`tkinter.ttk` widgets by default, instead of the classic :mod:`tkinter` widgets. Added the *bitmap*, *detail* and *use_ttk* parameters. Entries of *buttons* may be mappings of button options.

method:: go()
