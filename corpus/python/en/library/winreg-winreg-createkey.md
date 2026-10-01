---
id: "python-en-function-winreg-createkey"
language: "python"
lang: "en"
category: "function"
name: "CreateKey"
signature: "CreateKey(key, sub_key)"
directive: "function"
module: "winreg"
source_url: "https://docs.python.org/3/library/winreg.html#winreg.CreateKey"
license: "PSF"
updated: "2026-10-01"
---

# CreateKey

Creates or opens the specified key, returning a
`handle object`.

*key* is an already open key, or one of the predefined
`HKEY_* constants`.

*sub_key* is a string that names the key this method opens or creates.

If *key* is one of the predefined keys, *sub_key* may be `None`. In that
case, the handle returned is the same key handle passed in to the function.

If the key already exists, this function opens the existing key.

The return value is the handle of the opened key. If the function fails, an
`OSError` exception is raised.

audit-event:: winreg.CreateKey key,sub_key,access winreg.CreateKey

audit-event:: winreg.OpenKey/result key winreg.CreateKey

> *Changed in 3.3*: See :ref:`above <exception-changed>`.
