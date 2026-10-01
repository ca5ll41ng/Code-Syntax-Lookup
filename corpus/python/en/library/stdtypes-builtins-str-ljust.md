---
id: "python-en-function-builtins-str-ljust"
language: "python"
lang: "en"
category: "function"
name: "str.ljust"
signature: "str.ljust(width, fillchar=' ', /)"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.ljust"
license: "PSF"
updated: "2026-10-01"
---

# str.ljust

Return the string left justified in a string of length *width*. Padding is
done using the specified *fillchar* (default is an ASCII space). The
original string is returned if *width* is less than or equal to `len(s)`.

For example:

```python

>>> 'Python'.ljust(10)
'Python    '
>>> 'Python'.ljust(10, '.')
'Python....'
>>> 'Monty Python'.ljust(10, '.')
'Monty Python'
```

See also `rjust`.
