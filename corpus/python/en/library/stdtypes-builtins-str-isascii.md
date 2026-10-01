---
id: "python-en-function-builtins-str-isascii"
language: "python"
lang: "en"
category: "function"
name: "str.isascii"
signature: "str.isascii()"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.isascii"
license: "PSF"
updated: "2026-10-01"
---

# str.isascii

Return `True` if the string is empty or all characters in the string are ASCII,
`False` otherwise.
ASCII characters have code points in the range U+0000-U+007F. For example:

```python

>>> 'ASCII characters'.isascii()
True
>>> 'µ'.isascii()
False
```

> *Added in 3.7*
