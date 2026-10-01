---
id: "python-en-function-builtins-str-removeprefix"
language: "python"
lang: "en"
category: "function"
name: "str.removeprefix"
signature: "str.removeprefix(prefix, /)"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.removeprefix"
license: "PSF"
updated: "2026-10-01"
---

# str.removeprefix

If the string starts with the *prefix* string, return
`string[len(prefix):]`. Otherwise, return a copy of the original
string:

```python

>>> 'TestHook'.removeprefix('Test')
'Hook'
>>> 'BaseTestCase'.removeprefix('Test')
'BaseTestCase'
```

> *Added in 3.9*

See also `removesuffix` and `startswith`.
