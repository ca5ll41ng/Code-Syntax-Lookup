---
id: "python-en-function-builtins-str-rjust"
language: "python"
lang: "en"
category: "function"
name: "str.rjust"
signature: "str.rjust(width, fillchar=' ', /)"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.rjust"
license: "PSF"
updated: "2026-10-01"
---

# str.rjust

Return the string right justified in a string of length *width*. Padding is
done using the specified *fillchar* (default is an ASCII space). The
original string is returned if *width* is less than or equal to `len(s)`.

For example:

```python

>>> 'Python'.rjust(10)
'    Python'
>>> 'Python'.rjust(10, '.')
'....Python'
>>> 'Monty Python'.rjust(10, '.')
'Monty Python'
```

See also `ljust` and `zfill`.
