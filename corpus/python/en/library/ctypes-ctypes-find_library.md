---
id: "python-en-function-ctypes-find_library"
language: "python"
lang: "en"
category: "function"
name: "find_library"
signature: "find_library(name)"
directive: "function"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes.find_library"
license: "PSF"
updated: "2026-10-01"
---

# find_library

Try to find a library and return a pathname.

*name* is the "short" library name without any prefix like `lib`,
suffix like `.so`, `.dylib` or version number.
(This is the form used for the posix linker option `-l`.)
The result is in a format suitable for passing to :py`~ctypes.CDLL`.

If no library can be found, return `None`.

The exact functionality is system dependent, and is *not guaranteed*
to match the behavior of the compiler, linker, and loader used for
(or by) Python.
It is recommended to only use this function as a default or fallback,

soft-deprecated:: 3.15
