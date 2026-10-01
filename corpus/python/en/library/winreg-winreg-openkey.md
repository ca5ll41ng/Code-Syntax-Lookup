---
id: "python-en-function-winreg-openkey"
language: "python"
lang: "en"
category: "function"
name: "OpenKey"
signature: "OpenKey(key, sub_key, reserved=0, access=KEY_READ)"
directive: "function"
module: "winreg"
source_url: "https://docs.python.org/3/library/winreg.html#winreg.OpenKey"
license: "PSF"
updated: "2026-10-01"
---

# OpenKey

Opens the specified key, returning a `handle object`.

*key* is an already open key, or one of the predefined
`HKEY_* constants`.

*sub_key* is a string that identifies the sub_key to open.

*reserved* is a reserved integer, and must be zero.  The default is zero.

*access* is an integer that specifies an access mask that describes the desired
security access for the key.  Default is `KEY_READ`.  See `Access
Rights` for other allowed values.

The result is a new handle to the specified key.

If the function fails, `OSError` is raised.

audit-event:: winreg.OpenKey key,sub_key,access winreg.OpenKey

audit-event:: winreg.OpenKey/result key winreg.OpenKey

> *Changed in 3.2*: Allow the use of named arguments.

> *Changed in 3.3*: See :ref:`above <exception-changed>`.
