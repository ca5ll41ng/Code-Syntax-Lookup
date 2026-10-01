---
id: "python-en-function-typing-generator"
language: "python"
lang: "en"
category: "function"
name: "Generator"
signature: "Generator(Iterator[YieldType], Generic[YieldType, SendType, ReturnType])"
directive: "class"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.Generator"
license: "PSF"
updated: "2026-10-01"
---

# Generator

Deprecated alias to `collections.abc.Generator`.

See `annotating-generators-and-coroutines`
for details on using `collections.abc.Generator`
and `typing.Generator` in type annotations.

> *Deprecated since 3.9*: :class:`collections.abc.Generator` now supports subscripting (``[]``). See :pep:`585` and :ref:`types-genericalias`.

> *Changed in 3.13*: Default values for the send and return types were added.
