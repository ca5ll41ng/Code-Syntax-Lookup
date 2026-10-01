---
id: "python-zh-function-typing-contextmanager"
language: "python"
lang: "zh"
category: "function"
name: "ContextManager"
signature: "ContextManager(Generic[T_co, ExitT_co])"
directive: "class"
module: "typing"
source_url: "https://docs.python.org/zh-cn/3/library/typing.html#typing.ContextManager"
license: "PSF"
updated: "2026-10-01"
---

# ContextManager

:class:`contextlib.AbstractContextManager` 的已弃用的别名。

The first type parameter, `T_co`, represents the type returned by
the `~object.__enter__` method. The optional second type parameter, `ExitT_co`,
which defaults to `bool | None`, represents the type returned by the
`~object.__exit__` method.

> *Added in 3.5.4*

> *Deprecated since 3.9*: :class:`contextlib.AbstractContextManager` now supports subscripting (``[]``). See :pep:`585` and :ref:`types-genericalias`.

> *Changed in 3.13*: Added the optional second type parameter, ``ExitT_co``.
