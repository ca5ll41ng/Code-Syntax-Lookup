---
id: "python-en-function-winreg-pyhkey-detach"
language: "python"
lang: "en"
category: "function"
name: "PyHKEY.Detach"
signature: "PyHKEY.Detach()"
directive: "method"
module: "winreg"
source_url: "https://docs.python.org/3/library/winreg.html#winreg.PyHKEY.Detach"
license: "PSF"
updated: "2026-10-01"
---

# PyHKEY.Detach

Detaches the Windows handle from the handle object.

The result is an integer that holds the value of the handle before it is
detached.  If the handle is already detached or closed, this will return
zero.

After calling this function, the handle is effectively invalidated, but the
handle is not closed.  You would call this function when you need the
underlying Win32 handle to exist beyond the lifetime of the handle object.

audit-event:: winreg.PyHKEY.Detach key winreg.PyHKEY.Detach
