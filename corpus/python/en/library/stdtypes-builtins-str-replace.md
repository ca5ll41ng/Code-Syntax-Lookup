---
id: "python-en-function-builtins-str-replace"
language: "python"
lang: "en"
category: "function"
name: "str.replace"
signature: "str.replace(old, new, /, count=-1)"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.replace"
license: "PSF"
updated: "2026-10-01"
---

# str.replace

Return a copy of the string with all occurrences of substring *old* replaced by
*new*.  If *count* is given, only the first *count* occurrences are replaced.
If *count* is not specified or `-1`, then all occurrences are replaced.
For example:

```python

>>> 'spam, spam, spam'.replace('spam', 'eggs')
'eggs, eggs, eggs'
>>> 'spam, spam, spam'.replace('spam', 'eggs', 1)
'eggs, spam, spam'
```

> *Changed in 3.13*: *count* is now supported as a keyword argument.
