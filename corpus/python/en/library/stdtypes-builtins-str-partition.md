---
id: "python-en-function-builtins-str-partition"
language: "python"
lang: "en"
category: "function"
name: "str.partition"
signature: "str.partition(sep, /)"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.partition"
license: "PSF"
updated: "2026-10-01"
---

# str.partition

Split the string at the first occurrence of *sep*, and return a 3-tuple
containing the part before the separator, the separator itself, and the part
after the separator.  If the separator is not found, return a 3-tuple containing
the string itself, followed by two empty strings.

For example:

```python

>>> 'Monty Python'.partition(' ')
('Monty', ' ', 'Python')
>>> "Monty Python's Flying Circus".partition(' ')
('Monty', ' ', "Python's Flying Circus")
>>> 'Monty Python'.partition('-')
('Monty Python', '', '')
```

See also `rpartition`.
