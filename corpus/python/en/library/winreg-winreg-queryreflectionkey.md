---
id: "python-en-function-winreg-queryreflectionkey"
language: "python"
lang: "en"
category: "function"
name: "QueryReflectionKey"
signature: "QueryReflectionKey(key)"
directive: "function"
module: "winreg"
source_url: "https://docs.python.org/3/library/winreg.html#winreg.QueryReflectionKey"
license: "PSF"
updated: "2026-10-01"
---

# QueryReflectionKey

Determines the reflection state for the specified key.

*key* is an already open key, or one of the predefined
`HKEY_* constants`.

Returns `True` if reflection is disabled.

Will generally raise `NotImplementedError` if executed on a 32-bit
operating system.

audit-event:: winreg.QueryReflectionKey key winreg.QueryReflectionKey
