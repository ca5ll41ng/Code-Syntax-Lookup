---
id: "python-en-function-builtins-bytes-isalpha"
language: "python"
lang: "en"
category: "function"
name: "bytes.isalpha"
signature: "bytes.isalpha()"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#bytes.isalpha"
license: "PSF"
updated: "2026-10-01"
---

# bytes.isalpha

Return `True` if all bytes in the sequence are alphabetic ASCII characters
and the sequence is not empty, `False` otherwise.  Alphabetic ASCII
characters are those byte values in the sequence
`b'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'`.

For example::

   >>> b'ABCabc'.isalpha()
   True
   >>> b'ABCabc1'.isalpha()
   False
