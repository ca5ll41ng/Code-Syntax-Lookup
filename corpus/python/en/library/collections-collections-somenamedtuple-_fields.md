---
id: "python-en-function-collections-somenamedtuple-_fields"
language: "python"
lang: "en"
category: "function"
name: "somenamedtuple._fields"
directive: "attribute"
module: "collections"
source_url: "https://docs.python.org/3/library/collections.html#collections.somenamedtuple._fields"
license: "PSF"
updated: "2026-10-01"
---

# somenamedtuple._fields

Tuple of strings listing the field names.  Useful for introspection
and for creating new named tuple types from existing named tuples.

```python

>>> p._fields            # view the field names
('x', 'y')

>>> Color = namedtuple('Color', 'red green blue')
>>> Pixel = namedtuple('Pixel', Point._fields + Color._fields)
>>> Pixel(11, 22, 128, 255, 0)
Pixel(x=11, y=22, red=128, green=255, blue=0)
```
