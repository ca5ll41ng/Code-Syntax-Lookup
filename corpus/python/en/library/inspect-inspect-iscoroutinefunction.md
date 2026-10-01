---
id: "python-en-function-inspect-iscoroutinefunction"
language: "python"
lang: "en"
category: "function"
name: "iscoroutinefunction"
signature: "iscoroutinefunction(object)"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/3/library/inspect.html#inspect.iscoroutinefunction"
license: "PSF"
updated: "2026-10-01"
---

# iscoroutinefunction

Return `True` if the object is a `coroutine function` (a function
defined with an `async def` syntax), a `functools.partial`
wrapping a `coroutine function`, or a sync function marked with
`markcoroutinefunction`.

> *Added in 3.5*

> *Changed in 3.8*: Functions wrapped in :func:`functools.partial` now return ``True`` if the wrapped function is a :term:`coroutine function`.

> *Changed in 3.10.6*: :term:`Duck-typed <duck-typing>` function-like objects now return ``True`` if their code object has the :data:`CO_COROUTINE` flag.

> *Changed in 3.12*: Sync functions marked with :func:`markcoroutinefunction` now return ``True``.

> *Changed in 3.13*: Functions wrapped in :func:`functools.partialmethod` now return ``True`` if the wrapped function is a :term:`coroutine function`.
