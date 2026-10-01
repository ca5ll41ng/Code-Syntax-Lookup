---
id: "python-en-function-typing-noextraitems"
language: "python"
lang: "en"
category: "function"
name: "NoExtraItems"
directive: "data"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.NoExtraItems"
license: "PSF"
updated: "2026-10-01"
---

# NoExtraItems

A `sentinel` object used to indicate that a `TypedDict`
does not have the *extra_items* class argument.

```python

>>> from typing import TypedDict, NoExtraItems
>>> class Point(TypedDict):
...     x: int
...     y: int
...
>>> Point.__extra_items__ is NoExtraItems
True
```
