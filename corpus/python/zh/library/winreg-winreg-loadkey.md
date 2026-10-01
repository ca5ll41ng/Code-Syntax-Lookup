---
id: "python-zh-function-winreg-loadkey"
language: "python"
lang: "zh"
category: "function"
name: "LoadKey"
signature: "LoadKey(key, sub_key, file_name)"
directive: "function"
module: "winreg"
source_url: "https://docs.python.org/zh-cn/3/library/winreg.html#winreg.LoadKey"
license: "PSF"
updated: "2026-10-01"
---

# LoadKey

Creates a subkey under the specified key and stores registration information
from a specified file into that subkey.

*key* is a handle returned by `ConnectRegistry` or one of the constants
`HKEY_USERS` or `HKEY_LOCAL_MACHINE`.

*sub_key* 是个字符串，用于标识需要载入的子键。

*file_name* is the name of the file to load registry data from. This file must
have been created with the `SaveKey` function. Under the file allocation
table (FAT) file system, the filename may not have an extension.

A call to `LoadKey` fails if the calling process does not have the
:c`SE_RESTORE_PRIVILEGE` privilege.  Note that privileges are different
from permissions -- see the `RegLoadKey documentation
<https://msdn.microsoft.com/en-us/library/ms724889%28v=VS.85%29.aspx>`__ for
more details.

If *key* is a handle returned by `ConnectRegistry`, then the path
specified in *file_name* is relative to the remote computer.

audit-event:: winreg.LoadKey key,sub_key,file_name winreg.LoadKey
