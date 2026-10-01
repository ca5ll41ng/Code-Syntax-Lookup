---
id: "python-en-function-builtins-str-rindex"
language: "python"
lang: "en"
category: "function"
name: "str.rindex"
signature: "str.rindex(sub[, start[, end]])"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.rindex"
license: "PSF"
updated: "2026-10-01"
---

# str.rindex

Like `rfind` but raises `ValueError` when the substring *sub* is not
found.
For example:

```python

>>> 'spam, spam, spam'.rindex('spam')
12
>>> 'spam, spam, spam'.rindex('eggs')
Traceback (most recent call last):
  File "<stdin-0>", line 1, in <module>
    'spam, spam, spam'.rindex('eggs')
    ~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^
ValueError: substring not found
```

See also `index` and `find`.
