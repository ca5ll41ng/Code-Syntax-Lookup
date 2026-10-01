---
id: "python-en-function-builtins-str-swapcase"
language: "python"
lang: "en"
category: "function"
name: "str.swapcase"
signature: "str.swapcase()"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.swapcase"
license: "PSF"
updated: "2026-10-01"
---

# str.swapcase

Return a copy of the string with uppercase characters converted to lowercase and
vice versa. For example:

```python

>>> 'Hello World'.swapcase()
'hELLO wORLD'
```

Note that it is not necessarily true that `s.swapcase().swapcase() == s`.
For example:

```python

>>> 'straße'.swapcase().swapcase()
'strasse'
```

See also `str.lower` and `str.upper`.
