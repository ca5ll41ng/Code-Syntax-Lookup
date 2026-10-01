---
id: "python-en-function-ctypes-c_longdouble"
language: "python"
lang: "en"
category: "function"
name: "c_longdouble"
directive: "class"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes.c_longdouble"
license: "PSF"
updated: "2026-10-01"
---

# c_longdouble

Represents the C :c`long double` datatype.  The constructor accepts an
optional float initializer.  On platforms where `sizeof(long double) ==
sizeof(double)` it is an alias to `c_double`.
