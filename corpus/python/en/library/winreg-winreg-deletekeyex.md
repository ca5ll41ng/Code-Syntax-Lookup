---
id: "python-en-function-winreg-deletekeyex"
language: "python"
lang: "en"
category: "function"
name: "DeleteKeyEx"
signature: "DeleteKeyEx(key, sub_key, access=KEY_WOW64_64KEY, reserved=0)"
directive: "function"
module: "winreg"
source_url: "https://docs.python.org/3/library/winreg.html#winreg.DeleteKeyEx"
license: "PSF"
updated: "2026-10-01"
---

# DeleteKeyEx

Deletes the specified key.

*key* is an already open key, or one of the predefined
`HKEY_* constants`.

*sub_key* is a string that must be a subkey of the key identified by the
*key* parameter. This value must not be `None`, and the key may not have
subkeys.

*reserved* is a reserved integer, and must be zero. The default is zero.

*access* is an integer that specifies an access mask that describes the
desired security access for the key.  Default is `KEY_WOW64_64KEY`.
On 32-bit Windows, the WOW64 constants are ignored.
See `Access Rights` for other allowed values.

*This method can not delete keys with subkeys.*

If the method succeeds, the entire key, including all of its values, is
removed. If the method fails, an `OSError` exception is raised.

On unsupported Windows versions, `NotImplementedError` is raised.

audit-event:: winreg.DeleteKey key,sub_key,access winreg.DeleteKeyEx

> *Added in 3.2*

> *Changed in 3.3*: See :ref:`above <exception-changed>`.
