---
id: "python-en-function-tkinter-dialogs-filedialog"
language: "python"
lang: "en"
category: "function"
name: "FileDialog"
signature: "FileDialog(master, title=None, *, use_ttk=True)"
directive: "class"
module: "tkinter.dialogs"
source_url: "https://docs.python.org/3/library/tkinter.dialogs.html#tkinter.dialogs.FileDialog"
license: "PSF"
updated: "2026-10-01"
---

# FileDialog

Create a basic file selection dialog.
Its layout -- a filter entry, side-by-side directory and file lists, and a
selection entry -- follows the classic Motif file selection dialog.
When *use_ttk* is true (the default), the dialog is built from the themed
`tkinter.ttk` widgets; when false, from the classic `tkinter`
widgets.

> *Changed in next*: The dialog is now built from the themed :mod:`tkinter.ttk` widgets by default, instead of the classic :mod:`tkinter` widgets. Added the *use_ttk* parameter.

method:: cancel_command(event=None)

method:: dirs_double_event(event)

method:: dirs_select_event(event)

method:: files_double_event(event)

method:: files_select_event(event)

method:: filter_command(event=None)

method:: get_filter()

method:: get_selection()

method:: go(dir_or_file=os.curdir, pattern="*", default="", key=None)

method:: ok_event(event)

method:: ok_command()

method:: quit(how=None)

method:: set_filter(dir, pat)

method:: set_selection(file)
