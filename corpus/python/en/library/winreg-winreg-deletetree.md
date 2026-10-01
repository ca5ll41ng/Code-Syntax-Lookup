---
id: "python-en-function-winreg-deletetree"
language: "python"
lang: "en"
category: "function"
name: "DeleteTree"
signature: "DeleteTree(key, sub_key=None)"
directive: "function"
module: "winreg"
source_url: "https://docs.python.org/3/library/winreg.html#winreg.DeleteTree"
license: "PSF"
updated: "2026-10-01"
---

# DeleteTree

Deletes the specified key and all its subkeys and values recursively.

*key* is an already open key, or one of the predefined
`HKEY_* constants`.

*sub_key* is a string that names the subkey to delete. If `None`,
deletes all subkeys and values of the specified key.

This function deletes a key and all its descendants. If *sub_key* is
`None`, all subkeys and values of the specified key are deleted.

audit-event:: winreg.DeleteTree key,sub_key winreg.DeleteTree

> *Added in 3.15*
