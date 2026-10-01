---
id: "python-en-function-ctypes-c_ulonglong"
language: "python"
lang: "en"
category: "function"
name: "c_ulonglong"
directive: "class"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes.c_ulonglong"
license: "PSF"
updated: "2026-10-01"
---

# c_ulonglong

Represents the C :c`unsigned long long` datatype.  The constructor
accepts an optional integer initializer; no overflow checking is done.
On platforms where `sizeof(long long) == sizeof(long)` it is an alias
to `c_long`.
