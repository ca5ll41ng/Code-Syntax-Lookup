---
id: "python-en-function-ctypes-winerror"
language: "python"
lang: "en"
category: "function"
name: "WinError"
signature: "WinError(code=None, descr=None)"
directive: "function"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes.WinError"
license: "PSF"
updated: "2026-10-01"
---

# WinError

Creates an instance of `OSError`.  If *code* is not specified,
`GetLastError` is called to determine the error code. If *descr* is not
specified, `FormatError` is called to get a textual description of the
error.

availability:: Windows

> *Changed in 3.3*: An instance of :exc:`WindowsError` used to be created, which is now an alias of :exc:`OSError`.
