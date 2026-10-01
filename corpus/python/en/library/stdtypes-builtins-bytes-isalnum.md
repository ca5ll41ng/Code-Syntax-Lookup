---
id: "python-en-function-builtins-bytes-isalnum"
language: "python"
lang: "en"
category: "function"
name: "bytes.isalnum"
signature: "bytes.isalnum()"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#bytes.isalnum"
license: "PSF"
updated: "2026-10-01"
---

# bytes.isalnum

Return `True` if all bytes in the sequence are alphabetical ASCII characters
or ASCII decimal digits and the sequence is not empty, `False` otherwise.
Alphabetic ASCII characters are those byte values in the sequence
`b'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'`. ASCII decimal
digits are those byte values in the sequence `b'0123456789'`.

For example::

   >>> b'ABCabc1'.isalnum()
   True
   >>> b'ABC abc1'.isalnum()
   False
