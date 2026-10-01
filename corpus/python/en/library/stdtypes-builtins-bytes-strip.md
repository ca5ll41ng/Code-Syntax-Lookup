---
id: "python-en-function-builtins-bytes-strip"
language: "python"
lang: "en"
category: "function"
name: "bytes.strip"
signature: "bytes.strip(bytes=None, /)"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#bytes.strip"
license: "PSF"
updated: "2026-10-01"
---

# bytes.strip

Return a copy of the sequence with specified leading and trailing bytes
removed. The *bytes* argument is a binary sequence specifying the set of
byte values to be removed.  If omitted or `None`, the *bytes*
argument defaults to removing `ASCII whitespace`.
The *bytes* argument is
not a prefix or suffix; rather, all combinations of its values are
stripped::

   >>> b'   spacious   '.strip()
   b'spacious'
   >>> b'www.example.com'.strip(b'cmowz.')
   b'example'

The binary sequence of byte values to remove may be any
`bytes-like object`.

> **Note**
>
> The bytearray version of this method does *not* operate in place -
> it always produces a new object, even if no changes were made.
>
