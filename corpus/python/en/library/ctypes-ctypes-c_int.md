---
id: "python-en-function-ctypes-c_int"
language: "python"
lang: "en"
category: "function"
name: "c_int"
directive: "class"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes.c_int"
license: "PSF"
updated: "2026-10-01"
---

# c_int

Represents the C :c`signed int` datatype.  The constructor accepts an
optional integer initializer; no overflow checking is done.  On platforms
where `sizeof(int) == sizeof(long)` it is an alias to `c_long`.
