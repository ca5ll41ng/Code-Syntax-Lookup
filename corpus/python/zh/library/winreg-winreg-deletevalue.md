---
id: "python-zh-function-winreg-deletevalue"
language: "python"
lang: "zh"
category: "function"
name: "DeleteValue"
signature: "DeleteValue(key, value)"
directive: "function"
module: "winreg"
source_url: "https://docs.python.org/zh-cn/3/library/winreg.html#winreg.DeleteValue"
license: "PSF"
updated: "2026-10-01"
---

# DeleteValue

从某个注册键中删除一个命名值项。

*key* is an already open key, or one of the predefined
`HKEY_* constants`.

*value* 为标识所要删除值项的字符串。

audit-event:: winreg.DeleteValue key,value winreg.DeleteValue
