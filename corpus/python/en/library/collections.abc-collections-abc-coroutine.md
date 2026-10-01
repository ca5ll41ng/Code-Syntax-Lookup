---
id: "python-en-function-collections-abc-coroutine"
language: "python"
lang: "en"
category: "function"
name: "Coroutine"
directive: "class"
module: "collections.abc"
source_url: "https://docs.python.org/3/library/collections.abc.html#collections.abc.Coroutine"
license: "PSF"
updated: "2026-10-01"
---

# Coroutine

ABC for `coroutine` compatible classes.  These implement the
following methods, defined in `coroutine-objects`:
`~coroutine.send`, `~coroutine.throw`, and
`~coroutine.close`.  Custom implementations must also implement
`~object.__await__`.  All `Coroutine` instances are also
instances of `Awaitable`.

> **Note**
>
> In CPython, generator-based coroutines (`generators`
> decorated with `types.coroutine`) are
> *awaitables*, even though they do not have an `~object.__await__` method.
> Using `isinstance(gencoro, Coroutine)` for them will return `False`.
> Use `inspect.isawaitable` to detect them.
>

See `annotating-generators-and-coroutines`
for details on using `Coroutine` in type annotations.
The variance and order of type parameters correspond to those of
`Generator`.

> *Added in 3.5*
