---
id: "python-zh-function-winreg-enablereflectionkey"
language: "python"
lang: "zh"
category: "function"
name: "EnableReflectionKey"
signature: "EnableReflectionKey(key)"
directive: "function"
module: "winreg"
source_url: "https://docs.python.org/zh-cn/3/library/winreg.html#winreg.EnableReflectionKey"
license: "PSF"
updated: "2026-10-01"
---

# EnableReflectionKey

恢复已禁用注册表键的重定向。

*key* is an already open key, or one of the predefined `HKEY_* constants`.

Will generally raise `NotImplementedError` if executed on a 32-bit operating
system.

恢复注册表键的重定向不会影响任何子键的重定向。

audit-event:: winreg.EnableReflectionKey key winreg.EnableReflectionKey
