---
id: "python-zh-function-inspect-isgeneratorfunction"
language: "python"
lang: "zh"
category: "function"
name: "isgeneratorfunction"
signature: "isgeneratorfunction(object)"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/zh-cn/3/library/inspect.html#inspect.isgeneratorfunction"
license: "PSF"
updated: "2026-10-01"
---

# isgeneratorfunction

当该对象是一个 Python 生成器函数时返回 ``True``。

It also returns `True` for bound methods created from Python generator functions
(see `typesmethods` for more information).

> *Changed in 3.8*: Functions wrapped in :func:`functools.partial` now return ``True`` if the wrapped function is a Python generator function.

> *Changed in 3.10.6*: :term:`Duck-typed <duck-typing>` function-like objects now return ``True`` if their code object has the :data:`CO_GENERATOR` flag.

> *Changed in 3.13*: Functions wrapped in :func:`functools.partialmethod` now return ``True`` if the wrapped function is a Python generator function.
