---
id: "python-zh-function-winreg-queryvalue"
language: "python"
lang: "zh"
category: "function"
name: "QueryValue"
signature: "QueryValue(key, sub_key)"
directive: "function"
module: "winreg"
source_url: "https://docs.python.org/zh-cn/3/library/winreg.html#winreg.QueryValue"
license: "PSF"
updated: "2026-10-01"
---

# QueryValue

读取某键的未命名值，形式为字符串。

*key* is an already open key, or one of the predefined
`HKEY_* constants`.

*sub_key* is a string that holds the name of the subkey with which the value is
associated.  If this parameter is `None` or empty, the function retrieves the
value set by the `SetValue` method for the key identified by *key*.

Values in the registry have name, type, and data components. This method
retrieves the data for a key's first value that has a `NULL` name. But the
underlying API call doesn't return the type, so always use
`QueryValueEx` if possible.

audit-event:: winreg.QueryValue key,sub_key,value_name winreg.QueryValue
