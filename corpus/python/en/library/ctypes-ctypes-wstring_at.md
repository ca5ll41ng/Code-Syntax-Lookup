---
id: "python-en-function-ctypes-wstring_at"
language: "python"
lang: "en"
category: "function"
name: "wstring_at"
signature: "wstring_at(ptr, size=-1)"
directive: "function"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes.wstring_at"
license: "PSF"
updated: "2026-10-01"
---

# wstring_at

Return the wide-character string at *void \*ptr*.
If *size* is specified, it is used as the number of
characters of the string, otherwise the string is assumed to be
zero-terminated.

audit-event:: ctypes.wstring_at ptr,size ctypes.wstring_at
