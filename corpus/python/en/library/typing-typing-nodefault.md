---
id: "python-en-function-typing-nodefault"
language: "python"
lang: "en"
category: "function"
name: "NoDefault"
directive: "data"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.NoDefault"
license: "PSF"
updated: "2026-10-01"
---

# NoDefault

A sentinel object used to indicate that a type parameter has no default
value. For example:

```python

>>> T = TypeVar("T")
>>> T.__default__ is typing.NoDefault
True
>>> S = TypeVar("S", default=None)
>>> S.__default__ is None
True
```

> *Added in 3.13*
