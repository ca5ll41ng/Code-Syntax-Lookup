---
id: "python-en-function-builtins-str-isalnum"
language: "python"
lang: "en"
category: "function"
name: "str.isalnum"
signature: "str.isalnum()"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.isalnum"
license: "PSF"
updated: "2026-10-01"
---

# str.isalnum

Return `True` if all characters in the string are alphanumeric and there is at
least one character, `False` otherwise.  A character `c` is alphanumeric if one
of the following returns `True`: `c.isalpha()`, `c.isdecimal()`,
`c.isdigit()`, or `c.isnumeric()`. For example:

```python

>>> 'abc123'.isalnum()
True
>>> 'abc123!@#'.isalnum()
False
>>> ''.isalnum()
False
>>> ' '.isalnum()
False
```
