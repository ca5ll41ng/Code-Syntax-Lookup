---
id: "python-zh-function-winreg-createkeyex"
language: "python"
lang: "zh"
category: "function"
name: "CreateKeyEx"
signature: "CreateKeyEx(key, sub_key, reserved=0, access=KEY_WRITE)"
directive: "function"
module: "winreg"
source_url: "https://docs.python.org/zh-cn/3/library/winreg.html#winreg.CreateKeyEx"
license: "PSF"
updated: "2026-10-01"
---

# CreateKeyEx

Creates or opens the specified key, returning a
`handle object`.

*key* is an already open key, or one of the predefined
`HKEY_* constants`.

*sub_key* 是用于命名该方法所打开或创建的键的字符串。

*reserved* 是一个保留的整数，必须是零。 默认值为零。

*access* is an integer that specifies an access mask that describes the desired
security access for the key.  Default is `KEY_WRITE`.  See
`Access Rights` for other allowed values.

If *key* is one of the predefined keys, *sub_key* may be `None`. In that
case, the handle returned is the same key handle passed in to the function.

如果键已经存在，则该函数打开已经存在的该键。

The return value is the handle of the opened key. If the function fails, an
`OSError` exception is raised.

audit-event:: winreg.CreateKey key,sub_key,access winreg.CreateKeyEx

audit-event:: winreg.OpenKey/result key winreg.CreateKeyEx

> *Added in 3.2*

> *Changed in 3.3*: See :ref:`above <exception-changed>`.
