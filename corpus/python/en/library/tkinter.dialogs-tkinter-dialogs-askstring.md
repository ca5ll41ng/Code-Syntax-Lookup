---
id: "python-en-function-tkinter-dialogs-askstring"
language: "python"
lang: "en"
category: "function"
name: "askstring"
signature: "askstring(title, prompt, *, initialvalue=None, show=None, parent=None, use_ttk=True)"
directive: "function"
module: "tkinter.dialogs"
source_url: "https://docs.python.org/3/library/tkinter.dialogs.html#tkinter.dialogs.askstring"
license: "PSF"
updated: "2026-10-01"
---

# askstring

Prompt the user to enter a value of the desired type and return it, or
`None` if the dialog is cancelled.

*title* is the dialog title and *prompt* the message shown above the entry.
*initialvalue* is the value initially placed in the entry.
*parent* is the window over which the dialog is shown.
`askinteger` and `askfloat` also accept *minvalue* and
*maxvalue*, which bound the accepted value.
`askstring` also accepts *show*, a character used to mask the entered
text, for example `'*'` to hide a password.
They use the themed `tkinter.ttk` widgets; pass `use_ttk=False` for
the classic widgets.
