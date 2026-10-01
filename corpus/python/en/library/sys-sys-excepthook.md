---
id: "python-en-function-sys-excepthook"
language: "python"
lang: "en"
category: "function"
name: "excepthook"
signature: "excepthook(type, value, traceback)"
directive: "function"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.excepthook"
license: "PSF"
updated: "2026-10-01"
---

# excepthook

This function prints out a given traceback and exception to `sys.stderr`.

When an exception other than `SystemExit` is raised and uncaught, the interpreter calls
`sys.excepthook` with three arguments, the exception class, exception
instance, and a traceback object.  In an interactive session this happens just
before control is returned to the prompt; in a Python program this happens just
before the program exits.  The handling of such top-level exceptions can be
customized by assigning another three-argument function to `sys.excepthook`.

audit-event:: sys.excepthook hook,type,value,traceback sys.excepthook

> **Seealso**
>
> The `sys.unraisablehook` function handles unraisable exceptions
> and the `threading.excepthook` function handles exception raised
> by `threading.Thread.run`.
>
