---
id: "python-en-function-ctypes-resize"
language: "python"
lang: "en"
category: "function"
name: "resize"
signature: "resize(obj, size)"
directive: "function"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes.resize"
license: "PSF"
updated: "2026-10-01"
---

# resize

This function resizes the internal memory buffer of *obj*, which must be an
instance of a ctypes type.  It is not possible to make the buffer smaller
than the native size of the objects type, as given by `sizeof(type(obj))`,
but it is possible to enlarge the buffer.
