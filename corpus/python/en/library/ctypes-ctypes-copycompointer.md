---
id: "python-en-function-ctypes-copycompointer"
language: "python"
lang: "en"
category: "function"
name: "CopyComPointer"
signature: "CopyComPointer(src, dst)"
directive: "function"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes.CopyComPointer"
license: "PSF"
updated: "2026-10-01"
---

# CopyComPointer

Copies a COM pointer from *src* to *dst* and returns the Windows specific
:c`HRESULT` value.

If *src* is not `NULL`, its `AddRef` method is called, incrementing the
reference count.

In contrast, the reference count of *dst* will not be decremented before
assigning the new value. Unless *dst* is `NULL`, the caller is responsible
for decrementing the reference count by calling its `Release` method when
necessary.

availability:: Windows

> *Added in 3.14*
