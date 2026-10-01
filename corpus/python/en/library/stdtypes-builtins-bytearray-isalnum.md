---
id: "python-en-function-builtins-bytearray-isalnum"
language: "python"
lang: "en"
category: "function"
name: "bytearray.isalnum"
signature: "bytearray.isalnum()"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#bytearray.isalnum"
license: "PSF"
updated: "2026-10-01"
---

# bytearray.isalnum

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
