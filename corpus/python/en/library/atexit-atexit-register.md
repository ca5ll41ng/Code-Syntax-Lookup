---
id: "python-en-function-atexit-register"
language: "python"
lang: "en"
category: "function"
name: "register"
signature: "register(func, *args, **kwargs)"
directive: "function"
module: "atexit"
source_url: "https://docs.python.org/3/library/atexit.html#atexit.register"
license: "PSF"
updated: "2026-10-01"
---

# register

Register *func* as an exit handler.
Any optional arguments that are to be passed to *func* must be passed as
arguments to `register`.
It is possible to register the same function and arguments more than once.

This function returns *func*, which makes it possible to use it as a
decorator.
