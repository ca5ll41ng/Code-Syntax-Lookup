---
id: "python-en-function-ctypes-set_errno"
language: "python"
lang: "en"
category: "function"
name: "set_errno"
signature: "set_errno(value)"
directive: "function"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes.set_errno"
license: "PSF"
updated: "2026-10-01"
---

# set_errno

Set the current value of the ctypes-private copy of the system `errno`
variable in the calling thread to *value* and return the previous value.

audit-event:: ctypes.set_errno errno ctypes.set_errno
