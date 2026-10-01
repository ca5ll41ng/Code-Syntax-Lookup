---
id: "python-zh-function-winreg-openkey"
language: "python"
lang: "zh"
category: "function"
name: "OpenKey"
signature: "OpenKey(key, sub_key, reserved=0, access=KEY_READ)"
directive: "function"
module: "winreg"
source_url: "https://docs.python.org/zh-cn/3/library/winreg.html#winreg.OpenKey"
license: "PSF"
updated: "2026-10-01"
---

# OpenKey

打开指定的注册表键，返回一个 :ref:`句柄对象 <handle-object>`。

*key* is an already open key, or one of the predefined
`HKEY_* constants`.

*sub_key* 是个字符串，标识了需要打开的子键。

*reserved* 是个保留整数，必须为零。默认值为零。

*access* is an integer that specifies an access mask that describes the desired
security access for the key.  Default is `KEY_READ`.  See `Access
Rights` for other allowed values.

返回结果为一个新句柄，指向指定的注册表键。

如果调用失败，则会触发  :exc:`OSError` 。

audit-event:: winreg.OpenKey key,sub_key,access winreg.OpenKey

audit-event:: winreg.OpenKey/result key winreg.OpenKey

> *Changed in 3.2*: Allow the use of named arguments.

> *Changed in 3.3*: See :ref:`above <exception-changed>`.
