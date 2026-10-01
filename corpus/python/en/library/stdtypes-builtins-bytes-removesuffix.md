---
id: "python-en-function-builtins-bytes-removesuffix"
language: "python"
lang: "en"
category: "function"
name: "bytes.removesuffix"
signature: "bytes.removesuffix(suffix, /)"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#bytes.removesuffix"
license: "PSF"
updated: "2026-10-01"
---

# bytes.removesuffix

If the binary data ends with the *suffix* string and that *suffix* is
not empty, return `bytes[:-len(suffix)]`.  Otherwise, return a copy of
the original binary data::

   >>> b'MiscTests'.removesuffix(b'Tests')
   b'Misc'
   >>> b'TmpDirMixin'.removesuffix(b'Tests')
   b'TmpDirMixin'

The *suffix* may be any `bytes-like object`.

> **Note**
>
> The bytearray version of this method does *not* operate in place -
> it always produces a new object, even if no changes were made.
>

> *Added in 3.9*
