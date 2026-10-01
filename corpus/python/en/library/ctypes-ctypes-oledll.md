---
id: "python-en-function-ctypes-oledll"
language: "python"
lang: "en"
category: "function"
name: "OleDLL"
directive: "class"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes.OleDLL"
license: "PSF"
updated: "2026-10-01"
---

# OleDLL

See :py`~ctypes.CDLL`, the superclass, for common information.

Functions in this library use the `stdcall` calling convention, and are
assumed to return the windows specific `HRESULT` code.  `HRESULT`
values contain information specifying whether the function call failed or
succeeded, together with additional error code.  If the return value signals a
failure, an `OSError` is automatically raised.

availability:: Windows

> *Changed in 3.3*: :exc:`WindowsError` used to be raised, which is now an alias of :exc:`OSError`.
