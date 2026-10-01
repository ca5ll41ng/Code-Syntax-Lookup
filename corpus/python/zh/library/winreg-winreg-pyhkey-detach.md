---
id: "python-zh-function-winreg-pyhkey-detach"
language: "python"
lang: "zh"
category: "function"
name: "PyHKEY.Detach"
signature: "PyHKEY.Detach()"
directive: "method"
module: "winreg"
source_url: "https://docs.python.org/zh-cn/3/library/winreg.html#winreg.PyHKEY.Detach"
license: "PSF"
updated: "2026-10-01"
---

# PyHKEY.Detach

断开与 Windows 句柄的连接。

The result is an integer that holds the value of the handle before it is
detached.  If the handle is already detached or closed, this will return
zero.

After calling this function, the handle is effectively invalidated, but the
handle is not closed.  You would call this function when you need the
underlying Win32 handle to exist beyond the lifetime of the handle object.

audit-event:: winreg.PyHKEY.Detach key winreg.PyHKEY.Detach
