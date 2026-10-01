---
id: "python-zh-function-winreg-queryreflectionkey"
language: "python"
lang: "zh"
category: "function"
name: "QueryReflectionKey"
signature: "QueryReflectionKey(key)"
directive: "function"
module: "winreg"
source_url: "https://docs.python.org/zh-cn/3/library/winreg.html#winreg.QueryReflectionKey"
license: "PSF"
updated: "2026-10-01"
---

# QueryReflectionKey

确定给定注册表键的重定向状况。

*key* is an already open key, or one of the predefined
`HKEY_* constants`.

如果重定向已禁用则返回 ``True``。

Will generally raise `NotImplementedError` if executed on a 32-bit
operating system.

audit-event:: winreg.QueryReflectionKey key winreg.QueryReflectionKey
