---
id: "python-en-function-winreg-disablereflectionkey"
language: "python"
lang: "en"
category: "function"
name: "DisableReflectionKey"
signature: "DisableReflectionKey(key)"
directive: "function"
module: "winreg"
source_url: "https://docs.python.org/3/library/winreg.html#winreg.DisableReflectionKey"
license: "PSF"
updated: "2026-10-01"
---

# DisableReflectionKey

Disables registry reflection for 32-bit processes running on a 64-bit
operating system.

*key* is an already open key, or one of the predefined `HKEY_* constants`.

Will generally raise `NotImplementedError` if executed on a 32-bit operating
system.

If the key is not on the reflection list, the function succeeds but has no
effect.  Disabling reflection for a key does not affect reflection of any
subkeys.

audit-event:: winreg.DisableReflectionKey key winreg.DisableReflectionKey
