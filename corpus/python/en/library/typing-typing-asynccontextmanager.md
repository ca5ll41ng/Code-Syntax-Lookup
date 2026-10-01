---
id: "python-en-function-typing-asynccontextmanager"
language: "python"
lang: "en"
category: "function"
name: "AsyncContextManager"
signature: "AsyncContextManager(Generic[T_co, AExitT_co])"
directive: "class"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.AsyncContextManager"
license: "PSF"
updated: "2026-10-01"
---

# AsyncContextManager

Deprecated alias to `contextlib.AbstractAsyncContextManager`.

The first type parameter, `T_co`, represents the type returned by
the `~object.__aenter__` method. The optional second type parameter, `AExitT_co`,
which defaults to `bool | None`, represents the type returned by the
`~object.__aexit__` method.

> *Added in 3.6.2*

> *Deprecated since 3.9*: :class:`contextlib.AbstractAsyncContextManager` now supports subscripting (``[]``). See :pep:`585` and :ref:`types-genericalias`.

> *Changed in 3.13*: Added the optional second type parameter, ``AExitT_co``.
