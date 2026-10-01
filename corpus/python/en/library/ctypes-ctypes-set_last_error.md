---
id: "python-en-function-ctypes-set_last_error"
language: "python"
lang: "en"
category: "function"
name: "set_last_error"
signature: "set_last_error(value)"
directive: "function"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes.set_last_error"
license: "PSF"
updated: "2026-10-01"
---

# set_last_error

Sets the current value of the ctypes-private copy of the system
`LastError` variable in the calling thread to *value* and return the
previous value.

availability:: Windows

audit-event:: ctypes.set_last_error error ctypes.set_last_error
