---
id: "python-en-function-winreg-enumkey"
language: "python"
lang: "en"
category: "function"
name: "EnumKey"
signature: "EnumKey(key, index)"
directive: "function"
module: "winreg"
source_url: "https://docs.python.org/3/library/winreg.html#winreg.EnumKey"
license: "PSF"
updated: "2026-10-01"
---

# EnumKey

Enumerates subkeys of an open registry key, returning a string.

*key* is an already open key, or one of the predefined
`HKEY_* constants`.

*index* is an integer that identifies the index of the key to retrieve.

The function retrieves the name of one subkey each time it is called.  It is
typically called repeatedly until an `OSError` exception is
raised, indicating, no more values are available.

audit-event:: winreg.EnumKey key,index winreg.EnumKey

> *Changed in 3.3*: See :ref:`above <exception-changed>`.
