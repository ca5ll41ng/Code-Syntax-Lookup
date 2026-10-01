---
id: "python-en-function-builtins-str-startswith"
language: "python"
lang: "en"
category: "function"
name: "str.startswith"
signature: "str.startswith(prefix[, start[, end]])"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.startswith"
license: "PSF"
updated: "2026-10-01"
---

# str.startswith

Return `True` if string starts with the *prefix*, otherwise return `False`.
*prefix* can also be a tuple of prefixes to look for.  With optional *start*,
test string beginning at that position.  With optional *end*, stop comparing
string at that position.

For example:

```python

>>> 'Python'.startswith('Py')
True
>>> 'a tuple of prefixes'.startswith(('at', 'a'))
True
>>> 'Python is amazing'.startswith('is', 7)
True
```

See also `endswith` and `removeprefix`.
