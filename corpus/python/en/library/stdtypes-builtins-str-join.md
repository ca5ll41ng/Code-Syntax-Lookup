---
id: "python-en-function-builtins-str-join"
language: "python"
lang: "en"
category: "function"
name: "str.join"
signature: "str.join(iterable, /)"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.join"
license: "PSF"
updated: "2026-10-01"
---

# str.join

Return a string which is the concatenation of the strings in *iterable*.
A `TypeError` will be raised if there are any non-string values in
*iterable*, including `bytes` objects.  The separator between
elements is the string providing this method. For example:

```python

>>> ', '.join(['spam', 'spam', 'spam'])
'spam, spam, spam'
>>> '-'.join('Python')
'P-y-t-h-o-n'
```

See also `split`.
