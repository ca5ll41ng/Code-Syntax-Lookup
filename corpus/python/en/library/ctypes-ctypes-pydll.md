---
id: "python-en-function-ctypes-pydll"
language: "python"
lang: "en"
category: "function"
name: "PyDLL"
directive: "class"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes.PyDLL"
license: "PSF"
updated: "2026-10-01"
---

# PyDLL

See :py`~ctypes.CDLL`, the superclass, for common information.

When functions in this library are called, the
Python GIL is *not* released during the function call, and after the function
execution the Python error flag is checked. If the error flag is set, a Python
exception is raised.

Thus, this is only useful to call Python C API functions directly.
