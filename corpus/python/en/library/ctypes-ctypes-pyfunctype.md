---
id: "python-en-function-ctypes-pyfunctype"
language: "python"
lang: "en"
category: "function"
name: "PYFUNCTYPE"
signature: "PYFUNCTYPE(restype, *argtypes)"
directive: "function"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes.PYFUNCTYPE"
license: "PSF"
updated: "2026-10-01"
---

# PYFUNCTYPE

The returned function prototype creates functions that use the Python calling
convention.  The function will *not* release the GIL during the call.
