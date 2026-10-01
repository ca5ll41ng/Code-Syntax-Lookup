---
id: "python-en-function-builtins-str-rfind"
language: "python"
lang: "en"
category: "function"
name: "str.rfind"
signature: "str.rfind(sub[, start[, end]])"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.rfind"
license: "PSF"
updated: "2026-10-01"
---

# str.rfind

Return the highest index in the string where substring *sub* is found, such
that *sub* is contained within `s[start:end]`.  Optional arguments *start*
and *end* are interpreted as in slice notation.  Return `-1` on failure.
For example:

```python

>>> 'spam, spam, spam'.rfind('sp')
12
>>> 'spam, spam, spam'.rfind('sp', 0, 10)
6
```

See also `find` and `rindex`.
