---
id: "python-en-function-builtins-str-index"
language: "python"
lang: "en"
category: "function"
name: "str.index"
signature: "str.index(sub[, start[, end]])"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.index"
license: "PSF"
updated: "2026-10-01"
---

# str.index

Like `~str.find`, but raise `ValueError` when the substring is
not found. For example:

```python

>>> 'spam, spam, spam'.index('spam')
0
>>> 'spam, spam, spam'.index('eggs')
Traceback (most recent call last):
  File "<python-input-0>", line 1, in <module>
    'spam, spam, spam'.index('eggs')
    ~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^
ValueError: substring not found
```

See also `rindex`.
