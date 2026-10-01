---
id: "python-en-function-ctypes-string_at"
language: "python"
lang: "en"
category: "function"
name: "string_at"
signature: "string_at(ptr, size=-1)"
directive: "function"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes.string_at"
license: "PSF"
updated: "2026-10-01"
---

# string_at

Return the byte string at *void \*ptr*.
If *size* is specified, it is used as size, otherwise the string is assumed
to be zero-terminated.

audit-event:: ctypes.string_at ptr,size ctypes.string_at
