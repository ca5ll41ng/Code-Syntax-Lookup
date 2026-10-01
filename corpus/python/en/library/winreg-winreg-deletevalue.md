---
id: "python-en-function-winreg-deletevalue"
language: "python"
lang: "en"
category: "function"
name: "DeleteValue"
signature: "DeleteValue(key, value)"
directive: "function"
module: "winreg"
source_url: "https://docs.python.org/3/library/winreg.html#winreg.DeleteValue"
license: "PSF"
updated: "2026-10-01"
---

# DeleteValue

Removes a named value from a registry key.

*key* is an already open key, or one of the predefined
`HKEY_* constants`.

*value* is a string that identifies the value to remove.

audit-event:: winreg.DeleteValue key,value winreg.DeleteValue
