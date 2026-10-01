---
id: "python-zh-function-winreg-enumkey"
language: "python"
lang: "zh"
category: "function"
name: "EnumKey"
signature: "EnumKey(key, index)"
directive: "function"
module: "winreg"
source_url: "https://docs.python.org/zh-cn/3/library/winreg.html#winreg.EnumKey"
license: "PSF"
updated: "2026-10-01"
---

# EnumKey

列举某个已经打开注册表键的子项，并返回一个字符串。

*key* is an already open key, or one of the predefined
`HKEY_* constants`.

*index* 为一个整数，用于标识所获取键的索引。

The function retrieves the name of one subkey each time it is called.  It is
typically called repeatedly until an `OSError` exception is
raised, indicating, no more values are available.

audit-event:: winreg.EnumKey key,index winreg.EnumKey

> *Changed in 3.3*: See :ref:`above <exception-changed>`.
