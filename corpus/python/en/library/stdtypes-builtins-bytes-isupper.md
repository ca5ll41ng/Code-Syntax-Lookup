---
id: "python-en-function-builtins-bytes-isupper"
language: "python"
lang: "en"
category: "function"
name: "bytes.isupper"
signature: "bytes.isupper()"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#bytes.isupper"
license: "PSF"
updated: "2026-10-01"
---

# bytes.isupper

Return `True` if there is at least one uppercase alphabetic ASCII character
in the sequence and no lowercase ASCII characters, `False` otherwise.

For example::

   >>> b'HELLO WORLD'.isupper()
   True
   >>> b'Hello world'.isupper()
   False

Lowercase ASCII characters are those byte values in the sequence
`b'abcdefghijklmnopqrstuvwxyz'`. Uppercase ASCII characters
are those byte values in the sequence `b'ABCDEFGHIJKLMNOPQRSTUVWXYZ'`.
