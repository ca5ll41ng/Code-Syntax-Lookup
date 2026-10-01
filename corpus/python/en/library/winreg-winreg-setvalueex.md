---
id: "python-en-function-winreg-setvalueex"
language: "python"
lang: "en"
category: "function"
name: "SetValueEx"
signature: "SetValueEx(key, value_name, reserved, type, value)"
directive: "function"
module: "winreg"
source_url: "https://docs.python.org/3/library/winreg.html#winreg.SetValueEx"
license: "PSF"
updated: "2026-10-01"
---

# SetValueEx

Stores data in the value field of an open registry key.

*key* is an already open key, or one of the predefined
`HKEY_* constants`.

*value_name* is a string that names the subkey with which the value is
associated.

*reserved* can be anything -- zero is always passed to the API.

*type* is an integer that specifies the type of the data. See
`Value Types` for the available types.

*value* is a string that specifies the new value.

This method can also set additional value and type information for the specified
key.  The key identified by the key parameter must have been opened with
`KEY_SET_VALUE` access.

To open the key, use the `CreateKey` or `OpenKey` methods.

Value lengths are limited by available memory. Long values (more than 2048
bytes) should be stored as files with the filenames stored in the configuration
registry.  This helps the registry perform efficiently.

audit-event:: winreg.SetValue key,sub_key,type,value winreg.SetValueEx
