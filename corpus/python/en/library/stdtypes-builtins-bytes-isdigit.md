---
id: "python-en-function-builtins-bytes-isdigit"
language: "python"
lang: "en"
category: "function"
name: "bytes.isdigit"
signature: "bytes.isdigit()"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#bytes.isdigit"
license: "PSF"
updated: "2026-10-01"
---

# bytes.isdigit

Return `True` if all bytes in the sequence are ASCII decimal digits
and the sequence is not empty, `False` otherwise. ASCII decimal digits are
those byte values in the sequence `b'0123456789'`.

For example::

   >>> b'1234'.isdigit()
   True
   >>> b'1.23'.isdigit()
   False
