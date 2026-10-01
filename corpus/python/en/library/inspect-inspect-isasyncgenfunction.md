---
id: "python-en-function-inspect-isasyncgenfunction"
language: "python"
lang: "en"
category: "function"
name: "isasyncgenfunction"
signature: "isasyncgenfunction(object)"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/3/library/inspect.html#inspect.isasyncgenfunction"
license: "PSF"
updated: "2026-10-01"
---

# isasyncgenfunction

Return `True` if the object is an `asynchronous generator` function,
for example:

```python

>>> async def agen():
...     yield 1
...
>>> inspect.isasyncgenfunction(agen)
True
```

> *Added in 3.6*

> *Changed in 3.8*: Functions wrapped in :func:`functools.partial` now return ``True`` if the wrapped function is an :term:`asynchronous generator` function.

> *Changed in 3.10.6*: :term:`Duck-typed <duck-typing>` function-like objects now return ``True`` if their code object has the :data:`CO_ASYNC_GENERATOR` flag.

> *Changed in 3.13*: Functions wrapped in :func:`functools.partialmethod` now return ``True`` if the wrapped function is a :term:`asynchronous generator` function.
