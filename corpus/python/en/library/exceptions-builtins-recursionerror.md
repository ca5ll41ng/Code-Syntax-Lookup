---
id: "python-en-function-builtins-recursionerror"
language: "python"
lang: "en"
category: "function"
name: "RecursionError"
directive: "exception"
module: "builtins"
source_url: "https://docs.python.org/3/library/exceptions.html#RecursionError"
license: "PSF"
updated: "2026-10-01"
---

# RecursionError

This exception is derived from `RuntimeError`.  It is raised when the
interpreter detects that the maximum recursion depth (see
`sys.getrecursionlimit`) is exceeded.

> *Added in 3.5*: Previously, a plain :exc:`RuntimeError` was raised.
