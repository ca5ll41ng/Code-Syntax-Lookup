---
id: "python-en-function-ctypes-dllcanunloadnow"
language: "python"
lang: "en"
category: "function"
name: "DllCanUnloadNow"
signature: "DllCanUnloadNow()"
directive: "function"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes.DllCanUnloadNow"
license: "PSF"
updated: "2026-10-01"
---

# DllCanUnloadNow

This function is a hook which allows implementing in-process
COM servers with ctypes.  It is called from the DllCanUnloadNow function that
the _ctypes extension dll exports.

availability:: Windows
