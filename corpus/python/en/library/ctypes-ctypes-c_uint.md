---
id: "python-en-function-ctypes-c_uint"
language: "python"
lang: "en"
category: "function"
name: "c_uint"
directive: "class"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes.c_uint"
license: "PSF"
updated: "2026-10-01"
---

# c_uint

Represents the C :c`unsigned int` datatype.  The constructor accepts an
optional integer initializer; no overflow checking is done.  On platforms
where `sizeof(int) == sizeof(long)` it is an alias for `c_ulong`.
