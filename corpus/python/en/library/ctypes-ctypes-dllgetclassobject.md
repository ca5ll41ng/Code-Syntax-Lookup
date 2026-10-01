---
id: "python-en-function-ctypes-dllgetclassobject"
language: "python"
lang: "en"
category: "function"
name: "DllGetClassObject"
signature: "DllGetClassObject()"
directive: "function"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes.DllGetClassObject"
license: "PSF"
updated: "2026-10-01"
---

# DllGetClassObject

This function is a hook which allows implementing in-process
COM servers with ctypes.  It is called from the DllGetClassObject function
that the `_ctypes` extension dll exports.

availability:: Windows
