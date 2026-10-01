---
id: "python-en-function-builtins-str-format_map"
language: "python"
lang: "en"
category: "function"
name: "str.format_map"
signature: "str.format_map(mapping, /)"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.format_map"
license: "PSF"
updated: "2026-10-01"
---

# str.format_map

Similar to `str.format(**mapping)`, except that `mapping` is
used directly and not copied to a `dict`.  This is useful
if for example `mapping` is a dict subclass:

>>> class Default(dict):
...     def __missing__(self, key):
...         return key
...
>>> '{name} was born in {country}'.format_map(Default(name='Guido'))
'Guido was born in country'

> *Added in 3.2*
