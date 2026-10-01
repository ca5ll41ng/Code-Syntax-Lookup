---
id: "python-en-function-ctypes-winfunctype"
language: "python"
lang: "en"
category: "function"
name: "WINFUNCTYPE"
signature: "WINFUNCTYPE(restype, *argtypes, use_errno=False, use_last_error=False)"
directive: "function"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes.WINFUNCTYPE"
license: "PSF"
updated: "2026-10-01"
---

# WINFUNCTYPE

The returned function prototype creates functions that use the
`stdcall` calling convention.  The function will
release the GIL during the call.  *use_errno* and *use_last_error* have the
same meaning as above.

availability:: Windows
