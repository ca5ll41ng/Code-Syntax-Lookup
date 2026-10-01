---
id: "python-en-function-ctypes-_pointer"
language: "python"
lang: "en"
category: "function"
name: "_Pointer"
directive: "class"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes._Pointer"
license: "PSF"
updated: "2026-10-01"
---

# _Pointer

Private, abstract base class for pointers.

Concrete pointer types are created by calling `POINTER` with the
type that will be pointed to; this is done automatically by
`pointer`.

If a pointer points to an array, its elements can be read and
written using standard subscript and slice accesses.  Pointer objects
have no size, so `len` will raise `TypeError`.  Negative
subscripts will read from the memory *before* the pointer (as in C), and
out-of-range subscripts will probably crash with an access violation (if
you're lucky).

attribute:: _type_

attribute:: contents
