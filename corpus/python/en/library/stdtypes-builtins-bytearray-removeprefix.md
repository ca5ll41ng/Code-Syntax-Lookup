---
id: "python-en-function-builtins-bytearray-removeprefix"
language: "python"
lang: "en"
category: "function"
name: "bytearray.removeprefix"
signature: "bytearray.removeprefix(prefix, /)"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#bytearray.removeprefix"
license: "PSF"
updated: "2026-10-01"
---

# bytearray.removeprefix

If the binary data starts with the *prefix* string, return
`bytes[len(prefix):]`. Otherwise, return a copy of the original
binary data::

   >>> b'TestHook'.removeprefix(b'Test')
   b'Hook'
   >>> b'BaseTestCase'.removeprefix(b'Test')
   b'BaseTestCase'

The *prefix* may be any `bytes-like object`.

> **Note**
>
> The bytearray version of this method does *not* operate in place -
> it always produces a new object, even if no changes were made.
>

> *Added in 3.9*
