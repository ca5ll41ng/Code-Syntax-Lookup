---
id: "python-zh-function-typing-is_typeddict"
language: "python"
lang: "zh"
category: "function"
name: "is_typeddict"
signature: "is_typeddict(tp)"
directive: "function"
module: "typing"
source_url: "https://docs.python.org/zh-cn/3/library/typing.html#typing.is_typeddict"
license: "PSF"
updated: "2026-10-01"
---

# is_typeddict

检查一个类型是否为 :class:`TypedDict`。

例如:

```python

class Film(TypedDict):
    title: str
    year: int

assert is_typeddict(Film)
assert not is_typeddict(list | str)

# TypedDict is a factory for creating typed dicts,
# not a typed dict itself
assert not is_typeddict(TypedDict)
```

This function only returns true for `TypedDict` classes, not for
`generic aliases` of them:

```python

class GenericFilm[T](TypedDict):
    title: str
    year: T

assert not is_typeddict(GenericFilm[int])
```

> *Added in 3.10*
