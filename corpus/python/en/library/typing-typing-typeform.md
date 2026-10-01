---
id: "python-en-function-typing-typeform"
language: "python"
lang: "en"
category: "function"
name: "TypeForm"
directive: "data"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.TypeForm"
license: "PSF"
updated: "2026-10-01"
---

# TypeForm

A special form representing the value that results from evaluating a
type expression.

This value encodes the information supplied in the type expression, and
it represents the type described by that type expression.

When used in a type expression, `TypeForm` describes a set of type form
objects. It accepts a single type argument, which must be a valid type
expression. `TypeForm[T]` describes the set of all type form objects that
represent the type `T` or types assignable to `T`.

`TypeForm(obj)` simply returns `obj` unchanged. This is useful for
explicitly marking a value as a type form for static type checkers.

Example::

   from typing import Any, TypeForm

   def cast[T](typ: TypeForm[T], value: Any) -> T: ...

   reveal_type(cast(int, "x"))  # Revealed type is "int"

See PEP 747 for details.

> *Added in 3.15*
