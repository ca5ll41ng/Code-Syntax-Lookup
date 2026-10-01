---
id: "python-en-function-winreg-setvalue"
language: "python"
lang: "en"
category: "function"
name: "SetValue"
signature: "SetValue(key, sub_key, type, value)"
directive: "function"
module: "winreg"
source_url: "https://docs.python.org/3/library/winreg.html#winreg.SetValue"
license: "PSF"
updated: "2026-10-01"
---

# SetValue

Associates a value with a specified key.

*key* is an already open key, or one of the predefined
`HKEY_* constants`.

*sub_key* is a string that names the subkey with which the value is associated.

*type* is an integer that specifies the type of the data. Currently this must be
`REG_SZ`, meaning only strings are supported.  Use the `SetValueEx`
function for support for other data types.

*value* is a string that specifies the new value.

If the key specified by the *sub_key* parameter does not exist, the SetValue
function creates it.

Value lengths are limited by available memory. Long values (more than 2048
bytes) should be stored as files with the filenames stored in the configuration
registry.  This helps the registry perform efficiently.

The key identified by the *key* parameter must have been opened with
`KEY_SET_VALUE` access.

audit-event:: winreg.SetValue key,sub_key,type,value winreg.SetValue
