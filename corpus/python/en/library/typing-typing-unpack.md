---
id: "python-en-function-typing-unpack"
language: "python"
lang: "en"
category: "function"
name: "Unpack"
directive: "data"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.Unpack"
license: "PSF"
updated: "2026-10-01"
---

# Unpack

Typing operator to conceptually mark an object as having been unpacked.

For example, using the unpack operator `*` on a
`type variable tuple` is equivalent to using `Unpack`
to mark the type variable tuple as having been unpacked::

   Ts = TypeVarTuple('Ts')
   tup: tuple[*Ts]
   # Effectively does:
   tup: tuple[Unpack[Ts]]

In fact, `Unpack` can be used interchangeably with `*` in the context
of `typing.TypeVarTuple` and
`builtins.tuple` types. You might see `Unpack` being used
explicitly in older versions of Python, where `*` couldn't be used in
certain places::

   # In older versions of Python, TypeVarTuple and Unpack
   # are located in the `typing_extensions` backports package.
   from typing_extensions import TypeVarTuple, Unpack

   Ts = TypeVarTuple('Ts')
   tup: tuple[*Ts]         # Syntax error on Python <= 3.10!
   tup: tuple[Unpack[Ts]]  # Semantically equivalent, and backwards-compatible

`Unpack` can also be used along with `typing.TypedDict` for typing
`**kwargs` in a function signature::

   from typing import TypedDict, Unpack

   class Movie(TypedDict):
       name: str
       year: int

   # This function expects two keyword arguments - `name` of type `str`
   # and `year` of type `int`.
   def foo(**kwargs: Unpack[Movie]): ...

See PEP 692 for more details on using `Unpack` for `**kwargs` typing.

> *Added in 3.11*
