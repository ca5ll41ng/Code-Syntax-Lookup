---
id: "python-en-function-tkinter-dialogs-askinteger"
language: "python"
lang: "en"
category: "function"
name: "askinteger"
signature: "askinteger(title, prompt, *, initialvalue=None, minvalue=None, maxvalue=None, parent=None, use_ttk=True)"
directive: "function"
module: "tkinter.dialogs"
source_url: "https://docs.python.org/3/library/tkinter.dialogs.html#tkinter.dialogs.askinteger"
license: "PSF"
updated: "2026-10-01"
---

# askinteger

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
