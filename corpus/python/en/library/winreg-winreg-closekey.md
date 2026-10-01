---
id: "python-en-function-winreg-closekey"
language: "python"
lang: "en"
category: "function"
name: "CloseKey"
signature: "CloseKey(hkey)"
directive: "function"
module: "winreg"
source_url: "https://docs.python.org/3/library/winreg.html#winreg.CloseKey"
license: "PSF"
updated: "2026-10-01"
---

# CloseKey

Closes a previously opened registry key.  The *hkey* argument specifies a
previously opened key.

> **Note**
>
> If *hkey* is not closed using this method (or via `hkey.Close()`), it is closed when the *hkey* object is destroyed by
> Python.
>
