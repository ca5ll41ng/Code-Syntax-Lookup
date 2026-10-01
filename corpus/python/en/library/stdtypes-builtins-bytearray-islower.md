---
id: "python-en-function-builtins-bytearray-islower"
language: "python"
lang: "en"
category: "function"
name: "bytearray.islower"
signature: "bytearray.islower()"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#bytearray.islower"
license: "PSF"
updated: "2026-10-01"
---

# bytearray.islower

Return `True` if there is at least one lowercase ASCII character
in the sequence and no uppercase ASCII characters, `False` otherwise.

For example::

   >>> b'hello world'.islower()
   True
   >>> b'Hello world'.islower()
   False

Lowercase ASCII characters are those byte values in the sequence
`b'abcdefghijklmnopqrstuvwxyz'`. Uppercase ASCII characters
are those byte values in the sequence `b'ABCDEFGHIJKLMNOPQRSTUVWXYZ'`.
