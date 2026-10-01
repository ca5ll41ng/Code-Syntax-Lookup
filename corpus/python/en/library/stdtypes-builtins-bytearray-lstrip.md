---
id: "python-en-function-builtins-bytearray-lstrip"
language: "python"
lang: "en"
category: "function"
name: "bytearray.lstrip"
signature: "bytearray.lstrip(bytes=None, /)"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#bytearray.lstrip"
license: "PSF"
updated: "2026-10-01"
---

# bytearray.lstrip

Return a copy of the sequence with specified leading bytes removed.  The
*bytes* argument is a binary sequence specifying the set of byte values to
be removed.  If omitted or `None`, the *bytes* argument defaults
to removing `ASCII whitespace`.
The *bytes* argument is not a prefix;
rather, all combinations of its values are stripped::

   >>> b'   spacious   '.lstrip()
   b'spacious   '
   >>> b'www.example.com'.lstrip(b'cmowz.')
   b'example.com'

The binary sequence of byte values to remove may be any
`bytes-like object`. See `~bytes.removeprefix` for a method
that will remove a single prefix string rather than all of a set of
characters.  For example::

   >>> b'Arthur: three!'.lstrip(b'Arthur: ')
   b'ee!'
   >>> b'Arthur: three!'.removeprefix(b'Arthur: ')
   b'three!'

> **Note**
>
> The bytearray version of this method does *not* operate in place -
> it always produces a new object, even if no changes were made.
>
