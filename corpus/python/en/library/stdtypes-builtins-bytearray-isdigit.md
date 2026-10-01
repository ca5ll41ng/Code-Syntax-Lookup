---
id: "python-en-function-builtins-bytearray-isdigit"
language: "python"
lang: "en"
category: "function"
name: "bytearray.isdigit"
signature: "bytearray.isdigit()"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#bytearray.isdigit"
license: "PSF"
updated: "2026-10-01"
---

# bytearray.isdigit

Return `True` if all bytes in the sequence are ASCII decimal digits
and the sequence is not empty, `False` otherwise. ASCII decimal digits are
those byte values in the sequence `b'0123456789'`.

For example::

   >>> b'1234'.isdigit()
   True
   >>> b'1.23'.isdigit()
   False
