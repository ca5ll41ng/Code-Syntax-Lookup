---
id: "python-zh-function-winreg-setvalueex"
language: "python"
lang: "zh"
category: "function"
name: "SetValueEx"
signature: "SetValueEx(key, value_name, reserved, type, value)"
directive: "function"
module: "winreg"
source_url: "https://docs.python.org/zh-cn/3/library/winreg.html#winreg.SetValueEx"
license: "PSF"
updated: "2026-10-01"
---

# SetValueEx

将数据存入已打开的注册表键的值中。

*key* is an already open key, or one of the predefined
`HKEY_* constants`.

*value_name* is a string that names the subkey with which the value is
associated.

*reserved* 可以是任意数据 —— 传给 API 的总是 0。

*type* is an integer that specifies the type of the data. See
`Value Types` for the available types.

*value* 是设置新值的字符串。

This method can also set additional value and type information for the specified
key.  The key identified by the key parameter must have been opened with
`KEY_SET_VALUE` access.

请用 :func:`CreateKey` 或 :func:`OpenKey` 方法打开注册表键。

Value lengths are limited by available memory. Long values (more than 2048
bytes) should be stored as files with the filenames stored in the configuration
registry.  This helps the registry perform efficiently.

audit-event:: winreg.SetValue key,sub_key,type,value winreg.SetValueEx
