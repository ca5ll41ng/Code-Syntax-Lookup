---
id: "python-en-function-builtins-str-center"
language: "python"
lang: "en"
category: "function"
name: "str.center"
signature: "str.center(width, fillchar=' ', /)"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.center"
license: "PSF"
updated: "2026-10-01"
---

# str.center

Return centered in a string of length *width*. Padding is done using the
specified *fillchar* (default is an ASCII space). The original string is
returned if *width* is less than or equal to `len(s)`.  For example::

   >>> 'Python'.center(10)
   '  Python  '
   >>> 'Python'.center(10, '-')
   '--Python--'
   >>> 'Python'.center(4)
   'Python'
