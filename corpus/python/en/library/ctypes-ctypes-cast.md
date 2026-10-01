---
id: "python-en-function-ctypes-cast"
language: "python"
lang: "en"
category: "function"
name: "cast"
signature: "cast(obj, type)"
directive: "function"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes.cast"
license: "PSF"
updated: "2026-10-01"
---

# cast

This function is similar to the cast operator in C. It returns a new instance
of *type* which points to the same memory block as *obj*.  *type* must be a
pointer type, and *obj* must be an object that can be interpreted as a
pointer.
