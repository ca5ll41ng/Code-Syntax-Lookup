---
id: "python-en-function-builtins-bytes-translate"
language: "python"
lang: "en"
category: "function"
name: "bytes.translate"
signature: "bytes.translate(table, /, delete=b'')"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#bytes.translate"
license: "PSF"
updated: "2026-10-01"
---

# bytes.translate

Return a copy of the bytes or bytearray object where all bytes occurring in
the optional argument *delete* are removed, and the remaining bytes have
been mapped through the given translation table, which must be a bytes
object of length 256.

You can use the `bytes.maketrans` method to create a translation
table.

Set the *table* argument to `None` for translations that only delete
characters::

   >>> b'read this short text'.translate(None, b'aeiou')
   b'rd ths shrt txt'

> *Changed in 3.6*: *delete* is now supported as a keyword argument.
