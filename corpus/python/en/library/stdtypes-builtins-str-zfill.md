---
id: "python-en-function-builtins-str-zfill"
language: "python"
lang: "en"
category: "function"
name: "str.zfill"
signature: "str.zfill(width, /)"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.zfill"
license: "PSF"
updated: "2026-10-01"
---

# str.zfill

Return a copy of the string left filled with ASCII `'0'` digits to
make a string of length *width*. A leading sign prefix (`'+'`/`'-'`)
is handled by inserting the padding *after* the sign character rather
than before. The original string is returned if *width* is less than
or equal to `len(s)`.

For example:

```python

>>> "42".zfill(5)
'00042'
>>> "-42".zfill(5)
'-0042'
```

See also `rjust`.
