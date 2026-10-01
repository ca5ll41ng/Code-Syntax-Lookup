---
id: "python-en-function-tkinter-widget-tk-createfilehandler"
language: "python"
lang: "en"
category: "function"
name: "Widget.tk.createfilehandler"
signature: "Widget.tk.createfilehandler(file, mask, func)"
directive: "method"
module: "tkinter"
source_url: "https://docs.python.org/3/library/tkinter.html#tkinter.Widget.tk.createfilehandler"
license: "PSF"
updated: "2026-10-01"
---

# Widget.tk.createfilehandler

Registers the file handler callback function *func*. The *file* argument
may either be an object with a `~io.IOBase.fileno` method (such as
a file or socket object), or an integer file descriptor. The *mask*
argument is an ORed combination of any of the three constants below.
The callback is called as follows::

   callback(file, mask)
