---
id: "python-en-function-ctypes-byref"
language: "python"
lang: "en"
category: "function"
name: "byref"
signature: "byref(obj[, offset])"
directive: "function"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes.byref"
license: "PSF"
updated: "2026-10-01"
---

# byref

Returns a light-weight pointer to *obj*, which must be an instance of a
ctypes type.  *offset* defaults to zero, and must be an integer that will be
added to the internal pointer value.

`byref(obj, offset)` corresponds to this C code::

   (((char *)&obj) + offset)

The returned object can only be used as a foreign function call parameter.
It behaves similar to `pointer(obj)`, but the construction is a lot faster.
