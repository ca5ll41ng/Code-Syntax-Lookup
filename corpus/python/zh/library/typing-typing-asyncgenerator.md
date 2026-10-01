---
id: "python-zh-function-typing-asyncgenerator"
language: "python"
lang: "zh"
category: "function"
name: "AsyncGenerator"
signature: "AsyncGenerator(AsyncIterator[YieldType], Generic[YieldType, SendType])"
directive: "class"
module: "typing"
source_url: "https://docs.python.org/zh-cn/3/library/typing.html#typing.AsyncGenerator"
license: "PSF"
updated: "2026-10-01"
---

# AsyncGenerator

:class:`collections.abc.AsyncGenerator` 的已弃用的别名。

See `annotating-generators-and-coroutines`
for details on using `collections.abc.AsyncGenerator`
and `typing.AsyncGenerator` in type annotations.

> *Added in 3.6.1*

> *Deprecated since 3.9*: :class:`collections.abc.AsyncGenerator` now supports subscripting (``[]``). See :pep:`585` and :ref:`types-genericalias`.

> *Changed in 3.13*: The ``SendType`` parameter now has a default.
