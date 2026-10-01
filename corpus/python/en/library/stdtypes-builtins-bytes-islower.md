---
id: "python-en-function-builtins-bytes-islower"
language: "python"
lang: "en"
category: "function"
name: "bytes.islower"
signature: "bytes.islower()"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#bytes.islower"
license: "PSF"
updated: "2026-10-01"
---

# bytes.islower

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
