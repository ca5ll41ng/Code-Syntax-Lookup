---
id: "python-en-function-builtins-str-rstrip"
language: "python"
lang: "en"
category: "function"
name: "str.rstrip"
signature: "str.rstrip(chars=None, /)"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.rstrip"
license: "PSF"
updated: "2026-10-01"
---

# str.rstrip

Return a copy of the string with trailing characters removed.  The *chars*
argument is a string specifying the set of characters to be removed.  If omitted
or `None`, the *chars* argument defaults to removing whitespace, that is
characters for which `str.isspace` is true.  The *chars*
argument is not a suffix; rather, all combinations of its values are stripped.
For example:

```python

>>> '   spacious   '.rstrip()
'   spacious'
>>> 'mississippi'.rstrip('ipz')
'mississ'
```

See `removesuffix` for a method that will remove a single suffix
string rather than all of a set of characters.  For example::

   >>> 'Monty Python'.rstrip(' Python')
   'M'
   >>> 'Monty Python'.removesuffix(' Python')
   'Monty'

See also `strip`.
