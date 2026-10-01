---
id: "python-en-function-ctypes-getlasterror"
language: "python"
lang: "en"
category: "function"
name: "GetLastError"
signature: "GetLastError()"
directive: "function"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes.GetLastError"
license: "PSF"
updated: "2026-10-01"
---

# GetLastError

Returns the last error code set by Windows in the calling thread.
This function calls the Windows `GetLastError()` function directly,
it does not return the ctypes-private copy of the error code.

availability:: Windows
