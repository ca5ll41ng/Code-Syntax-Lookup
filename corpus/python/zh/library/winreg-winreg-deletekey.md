---
id: "python-zh-function-winreg-deletekey"
language: "python"
lang: "zh"
category: "function"
name: "DeleteKey"
signature: "DeleteKey(key, sub_key)"
directive: "function"
module: "winreg"
source_url: "https://docs.python.org/zh-cn/3/library/winreg.html#winreg.DeleteKey"
license: "PSF"
updated: "2026-10-01"
---

# DeleteKey

删除指定的键。

*key* is an already open key, or one of the predefined
`HKEY_* constants`.

*sub_key* is a string that must be a subkey of the key identified by the *key*
parameter.  This value must not be `None`, and the key may not have subkeys.

*该方法不能删除带有子项的键。*

If the method succeeds, the entire key, including all of its values, is removed.
If the method fails, an `OSError` exception is raised.

audit-event:: winreg.DeleteKey key,sub_key,access winreg.DeleteKey

> *Changed in 3.3*: See :ref:`above <exception-changed>`.
