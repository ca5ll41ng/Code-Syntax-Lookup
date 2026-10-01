---
id: "python-en-function-winreg-createkeyex"
language: "python"
lang: "en"
category: "function"
name: "CreateKeyEx"
signature: "CreateKeyEx(key, sub_key, reserved=0, access=KEY_WRITE)"
directive: "function"
module: "winreg"
source_url: "https://docs.python.org/3/library/winreg.html#winreg.CreateKeyEx"
license: "PSF"
updated: "2026-10-01"
---

# CreateKeyEx

Creates or opens the specified key, returning a
`handle object`.

*key* is an already open key, or one of the predefined
`HKEY_* constants`.

*sub_key* is a string that names the key this method opens or creates.

*reserved* is a reserved integer, and must be zero. The default is zero.

*access* is an integer that specifies an access mask that describes the desired
security access for the key.  Default is `KEY_WRITE`.  See
`Access Rights` for other allowed values.

If *key* is one of the predefined keys, *sub_key* may be `None`. In that
case, the handle returned is the same key handle passed in to the function.

If the key already exists, this function opens the existing key.

The return value is the handle of the opened key. If the function fails, an
`OSError` exception is raised.

audit-event:: winreg.CreateKey key,sub_key,access winreg.CreateKeyEx

audit-event:: winreg.OpenKey/result key winreg.CreateKeyEx

> *Added in 3.2*

> *Changed in 3.3*: See :ref:`above <exception-changed>`.
