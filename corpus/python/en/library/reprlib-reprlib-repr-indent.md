---
id: "python-en-function-reprlib-repr-indent"
language: "python"
lang: "en"
category: "function"
name: "Repr.indent"
directive: "attribute"
module: "reprlib"
source_url: "https://docs.python.org/3/library/reprlib.html#reprlib.Repr.indent"
license: "PSF"
updated: "2026-10-01"
---

# Repr.indent

If this attribute is set to `None` (the default), the output is formatted
with no line breaks or indentation, like the standard `repr`.
For example:

```python

>>> example = [
...     1, 'spam', {'a': 2, 'b': 'spam eggs', 'c': {3: 4.5, 6: []}}, 'ham']
>>> import reprlib
>>> aRepr = reprlib.Repr()
>>> print(aRepr.repr(example))
[1, 'spam', {'a': 2, 'b': 'spam eggs', 'c': {3: 4.5, 6: []}}, 'ham']
```

If `~Repr.indent` is set to a string, each recursion level
is placed on its own line, indented by that string:

```python

>>> aRepr.indent = '-->'
>>> print(aRepr.repr(example))
[
-->1,
-->'spam',
-->{
-->-->'a': 2,
-->-->'b': 'spam eggs',
-->-->'c': {
-->-->-->3: 4.5,
-->-->-->6: [],
-->-->},
-->},
-->'ham',
]
```

Setting `~Repr.indent` to a positive integer value behaves as if it
was set to a string with that number of spaces:

```python

>>> aRepr.indent = 4
>>> print(aRepr.repr(example))
[
    1,
    'spam',
    {
        'a': 2,
        'b': 'spam eggs',
        'c': {
            3: 4.5,
            6: [],
        },
    },
    'ham',
]
```

> *Added in 3.12*
