---
id: "python-en-function-ctypes-memoryview_at"
language: "python"
lang: "en"
category: "function"
name: "memoryview_at"
signature: "memoryview_at(ptr, size, readonly=False)"
directive: "function"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes.memoryview_at"
license: "PSF"
updated: "2026-10-01"
---

# memoryview_at

Return a `memoryview` object of length *size* that references memory
starting at *void \*ptr*.

If *readonly* is true, the returned `memoryview` object can
not be used to modify the underlying memory.
(Changes made by other means will still be reflected in the returned
object.)

This function is similar to `string_at` with the key
difference of not making a copy of the specified memory.
It is a semantically equivalent (but more efficient) alternative to
`memoryview((c_byte * size).from_address(ptr))`.
(While `~_CData.from_address` only takes integers, *ptr* can also
be given as a `ctypes.POINTER` or a `~ctypes.byref` object.)

audit-event:: ctypes.memoryview_at address,size,readonly

> *Added in 3.14*
