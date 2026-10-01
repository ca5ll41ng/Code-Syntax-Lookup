---
id: "python-en-function-ctypes-c_char_p"
language: "python"
lang: "en"
category: "function"
name: "c_char_p"
directive: "class"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes.c_char_p"
license: "PSF"
updated: "2026-10-01"
---

# c_char_p

Represents the C :c`char *` datatype when it points to a zero-terminated
string.  For a general character pointer that may also point to binary data,
`POINTER(c_char)` must be used.  The constructor accepts an integer
address, or a bytes object.
