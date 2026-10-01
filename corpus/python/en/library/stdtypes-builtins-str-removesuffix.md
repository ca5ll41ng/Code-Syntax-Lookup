---
id: "python-en-function-builtins-str-removesuffix"
language: "python"
lang: "en"
category: "function"
name: "str.removesuffix"
signature: "str.removesuffix(suffix, /)"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.removesuffix"
license: "PSF"
updated: "2026-10-01"
---

# str.removesuffix

If the string ends with the *suffix* string and that *suffix* is not empty,
return `string[:-len(suffix)]`. Otherwise, return a copy of the
original string:

```python

>>> 'MiscTests'.removesuffix('Tests')
'Misc'
>>> 'TmpDirMixin'.removesuffix('Tests')
'TmpDirMixin'
```

> *Added in 3.9*

See also `removeprefix` and `endswith`.
