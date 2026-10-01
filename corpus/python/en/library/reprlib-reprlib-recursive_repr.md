---
id: "python-en-function-reprlib-recursive_repr"
language: "python"
lang: "en"
category: "function"
name: "recursive_repr"
signature: "recursive_repr(fillvalue=\"...\")"
directive: "decorator"
module: "reprlib"
source_url: "https://docs.python.org/3/library/reprlib.html#reprlib.recursive_repr"
license: "PSF"
updated: "2026-10-01"
---

# recursive_repr

Decorator for `~object.__repr__` methods to detect recursive calls within the
same thread.  If a recursive call is made, the *fillvalue* is returned,
otherwise, the usual `__repr__` call is made.  For example:

```python

>>> from reprlib import recursive_repr
>>> class MyList(list):
...     @recursive_repr()
...     def __repr__(self):
...         return '<' + '|'.join(map(repr, self)) + '>'
...
>>> m = MyList('abc')
>>> m.append(m)
>>> m.append('x')
>>> print(m)
<'a'|'b'|'c'|...|'x'>
```

> *Added in 3.2*
