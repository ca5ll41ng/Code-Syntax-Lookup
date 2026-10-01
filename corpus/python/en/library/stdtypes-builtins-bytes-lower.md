---
id: "python-en-function-builtins-bytes-lower"
language: "python"
lang: "en"
category: "function"
name: "bytes.lower"
signature: "bytes.lower()"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#bytes.lower"
license: "PSF"
updated: "2026-10-01"
---

# bytes.lower

Return a copy of the sequence with all the uppercase ASCII characters
converted to their corresponding lowercase counterpart.

For example::

   >>> b'Hello World'.lower()
   b'hello world'

Lowercase ASCII characters are those byte values in the sequence
`b'abcdefghijklmnopqrstuvwxyz'`. Uppercase ASCII characters
are those byte values in the sequence `b'ABCDEFGHIJKLMNOPQRSTUVWXYZ'`.

> **Note**
>
> The bytearray version of this method does *not* operate in place - it
> always produces a new object, even if no changes were made.
>
