---
id: "python-en-function-typing-optional"
language: "python"
lang: "en"
category: "function"
name: "Optional"
directive: "data"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.Optional"
license: "PSF"
updated: "2026-10-01"
---

# Optional

`Optional[X]` is equivalent to `X | None` (or `Union[X, None]`).

Note that this is not the same concept as an optional argument,
which is one that has a default.  An optional argument with a
default does not require the `Optional` qualifier on its type
annotation just because it is optional. For example::

   def foo(arg: int = 0) -> None:
       ...

On the other hand, if an explicit value of `None` is allowed, the
use of `Optional` is appropriate, whether the argument is optional
or not. For example::

   def foo(arg: Optional[int] = None) -> None:
       ...

> *Changed in 3.10*: Optional can now be written as ``X | None``. See :ref:`union type expressions<types-union>`.
