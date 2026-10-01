---
id: "python-en-function-collections-abc-awaitable"
language: "python"
lang: "en"
category: "function"
name: "Awaitable"
directive: "class"
module: "collections.abc"
source_url: "https://docs.python.org/3/library/collections.abc.html#collections.abc.Awaitable"
license: "PSF"
updated: "2026-10-01"
---

# Awaitable

ABC for `awaitable` objects, which can be used in `await`
expressions.  Custom implementations must provide the
`~object.__await__` method.

`Coroutine` objects and instances of the
`~collections.abc.Coroutine` ABC are all instances of this ABC.

> **Note**
>
> In CPython, generator-based coroutines (`generators`
> decorated with `types.coroutine`) are
> *awaitables*, even though they do not have an `~object.__await__` method.
> Using `isinstance(gencoro, Awaitable)` for them will return `False`.
> Use `inspect.isawaitable` to detect them.
>

> *Added in 3.5*
