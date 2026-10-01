---
id: "python-zh-function-winreg-flushkey"
language: "python"
lang: "zh"
category: "function"
name: "FlushKey"
signature: "FlushKey(key)"
directive: "function"
module: "winreg"
source_url: "https://docs.python.org/zh-cn/3/library/winreg.html#winreg.FlushKey"
license: "PSF"
updated: "2026-10-01"
---

# FlushKey

将某个键的所有属性写入注册表。

*key* is an already open key, or one of the predefined
`HKEY_* constants`.

It is not necessary to call `FlushKey` to change a key. Registry changes are
flushed to disk by the registry using its lazy flusher.  Registry changes are
also flushed to disk at system shutdown.  Unlike `CloseKey`, the
`FlushKey` method returns only when all the data has been written to the
registry. An application should only call `FlushKey` if it requires
absolute certainty that registry changes are on disk.

> **Note**
>
> If you don't know whether a `FlushKey` call is required, it probably
> isn't.
>
