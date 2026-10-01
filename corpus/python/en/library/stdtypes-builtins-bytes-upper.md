---
id: "python-en-function-builtins-bytes-upper"
language: "python"
lang: "en"
category: "function"
name: "bytes.upper"
signature: "bytes.upper()"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#bytes.upper"
license: "PSF"
updated: "2026-10-01"
---

# bytes.upper

Return a copy of the sequence with all the lowercase ASCII characters
converted to their corresponding uppercase counterpart.

For example::

   >>> b'Hello World'.upper()
   b'HELLO WORLD'

Lowercase ASCII characters are those byte values in the sequence
`b'abcdefghijklmnopqrstuvwxyz'`. Uppercase ASCII characters
are those byte values in the sequence `b'ABCDEFGHIJKLMNOPQRSTUVWXYZ'`.

> **Note**
>
> The bytearray version of this method does *not* operate in place - it
> always produces a new object, even if no changes were made.
>
