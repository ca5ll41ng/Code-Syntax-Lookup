---
id: "python-en-function-builtins-bytes-rstrip"
language: "python"
lang: "en"
category: "function"
name: "bytes.rstrip"
signature: "bytes.rstrip(bytes=None, /)"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#bytes.rstrip"
license: "PSF"
updated: "2026-10-01"
---

# bytes.rstrip

Return a copy of the sequence with specified trailing bytes removed.  The
*bytes* argument is a binary sequence specifying the set of byte values to
be removed.  If omitted or `None`, the *bytes* argument defaults to
removing `ASCII whitespace`.
The *bytes* argument is not a suffix; rather,
all combinations of its values are stripped::

   >>> b'   spacious   '.rstrip()
   b'   spacious'
   >>> b'mississippi'.rstrip(b'ipz')
   b'mississ'

The binary sequence of byte values to remove may be any
`bytes-like object`. See `~bytes.removesuffix` for a method
that will remove a single suffix string rather than all of a set of
characters.  For example::

   >>> b'Monty Python'.rstrip(b' Python')
   b'M'
   >>> b'Monty Python'.removesuffix(b' Python')
   b'Monty'

> **Note**
>
> The bytearray version of this method does *not* operate in place -
> it always produces a new object, even if no changes were made.
>
