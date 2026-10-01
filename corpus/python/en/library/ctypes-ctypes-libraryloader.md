---
id: "python-en-function-ctypes-libraryloader"
language: "python"
lang: "en"
category: "function"
name: "LibraryLoader"
signature: "LibraryLoader(dlltype)"
directive: "class"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes.LibraryLoader"
license: "PSF"
updated: "2026-10-01"
---

# LibraryLoader

Class which loads shared libraries.  *dlltype* should be one of the
`CDLL`, `PyDLL`, `WinDLL`, or `OleDLL` types.

`__getattr__` has special behavior: It allows loading a shared library by
accessing it as attribute of a library loader instance.  The result is cached,
so repeated attribute accesses return the same library each time.

method:: LoadLibrary(name)
