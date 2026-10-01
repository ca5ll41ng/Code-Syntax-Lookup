---
id: "python-en-function-builtins-bytearray-splitlines"
language: "python"
lang: "en"
category: "function"
name: "bytearray.splitlines"
signature: "bytearray.splitlines(keepends=False)"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#bytearray.splitlines"
license: "PSF"
updated: "2026-10-01"
---

# bytearray.splitlines

Return a list of the lines in the binary sequence, breaking at ASCII
line boundaries. This method uses the `universal newlines` approach
to splitting lines. Line breaks are not included in the resulting list
unless *keepends* is given and true.

For example::

   >>> b'ab c\n\nde fg\rkl\r\n'.splitlines()
   [b'ab c', b'', b'de fg', b'kl']
   >>> b'ab c\n\nde fg\rkl\r\n'.splitlines(keepends=True)
   [b'ab c\n', b'\n', b'de fg\r', b'kl\r\n']

Unlike `~bytes.split` when a delimiter string *sep* is given, this
method returns an empty list for the empty string, and a terminal line
break does not result in an extra line::

   >>> b"".split(b'\n'), b"Two lines\n".split(b'\n')
   ([b''], [b'Two lines', b''])
   >>> b"".splitlines(), b"One line\n".splitlines()
   ([], [b'One line'])
