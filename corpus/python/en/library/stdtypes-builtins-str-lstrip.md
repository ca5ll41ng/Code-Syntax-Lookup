---
id: "python-en-function-builtins-str-lstrip"
language: "python"
lang: "en"
category: "function"
name: "str.lstrip"
signature: "str.lstrip(chars=None, /)"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.lstrip"
license: "PSF"
updated: "2026-10-01"
---

# str.lstrip

Return a copy of the string with leading characters removed.  The *chars*
argument is a string specifying the set of characters to be removed.  If omitted
or `None`, the *chars* argument defaults to removing whitespace, that is
characters for which `str.isspace` is true.  The *chars*
argument is not a prefix; rather, all combinations of its values are stripped::

   >>> '   spacious   '.lstrip()
   'spacious   '
   >>> 'www.example.com'.lstrip('cmowz.')
   'example.com'

See `str.removeprefix` for a method that will remove a single prefix
string rather than all of a set of characters.  For example::

   >>> 'Arthur: three!'.lstrip('Arthur: ')
   'ee!'
   >>> 'Arthur: three!'.removeprefix('Arthur: ')
   'three!'
