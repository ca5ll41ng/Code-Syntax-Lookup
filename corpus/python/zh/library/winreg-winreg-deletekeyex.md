---
id: "python-zh-function-winreg-deletekeyex"
language: "python"
lang: "zh"
category: "function"
name: "DeleteKeyEx"
signature: "DeleteKeyEx(key, sub_key, access=KEY_WOW64_64KEY, reserved=0)"
directive: "function"
module: "winreg"
source_url: "https://docs.python.org/zh-cn/3/library/winreg.html#winreg.DeleteKeyEx"
license: "PSF"
updated: "2026-10-01"
---

# DeleteKeyEx

删除指定的键。

*key* is an already open key, or one of the predefined
`HKEY_* constants`.

*sub_key* is a string that must be a subkey of the key identified by the
*key* parameter. This value must not be `None`, and the key may not have
subkeys.

*reserved* 是一个保留的整数，必须是零。 默认值为零。

*access* is an integer that specifies an access mask that describes the
desired security access for the key.  Default is `KEY_WOW64_64KEY`.
On 32-bit Windows, the WOW64 constants are ignored.
See `Access Rights` for other allowed values.

*该方法不能删除带有子项的键。*

If the method succeeds, the entire key, including all of its values, is
removed. If the method fails, an `OSError` exception is raised.

在不支持的 Windows 版本之上，将会引发 :exc:`NotImplementedError` 异常。

audit-event:: winreg.DeleteKey key,sub_key,access winreg.DeleteKeyEx

> *Added in 3.2*

> *Changed in 3.3*: See :ref:`above <exception-changed>`.
