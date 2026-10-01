---
id: "python-en-function-builtins-str-rpartition"
language: "python"
lang: "en"
category: "function"
name: "str.rpartition"
signature: "str.rpartition(sep, /)"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.rpartition"
license: "PSF"
updated: "2026-10-01"
---

# str.rpartition

Split the string at the last occurrence of *sep*, and return a 3-tuple
containing the part before the separator, the separator itself, and the part
after the separator.  If the separator is not found, return a 3-tuple containing
two empty strings, followed by the string itself.

For example:

```python

>>> 'Monty Python'.rpartition(' ')
('Monty', ' ', 'Python')
>>> "Monty Python's Flying Circus".rpartition(' ')
("Monty Python's Flying", ' ', 'Circus')
>>> 'Monty Python'.rpartition('-')
('', '', 'Monty Python')
```

See also `partition`.
