---
id: "python-en-function-winreg-enablereflectionkey"
language: "python"
lang: "en"
category: "function"
name: "EnableReflectionKey"
signature: "EnableReflectionKey(key)"
directive: "function"
module: "winreg"
source_url: "https://docs.python.org/3/library/winreg.html#winreg.EnableReflectionKey"
license: "PSF"
updated: "2026-10-01"
---

# EnableReflectionKey

Restores registry reflection for the specified disabled key.

*key* is an already open key, or one of the predefined `HKEY_* constants`.

Will generally raise `NotImplementedError` if executed on a 32-bit operating
system.

Restoring reflection for a key does not affect reflection of any subkeys.

audit-event:: winreg.EnableReflectionKey key winreg.EnableReflectionKey
