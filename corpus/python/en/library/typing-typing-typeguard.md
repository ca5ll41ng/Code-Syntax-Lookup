---
id: "python-en-function-typing-typeguard"
language: "python"
lang: "en"
category: "function"
name: "TypeGuard"
directive: "data"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.TypeGuard"
license: "PSF"
updated: "2026-10-01"
---

# TypeGuard

Special typing construct for marking user-defined type predicate functions.

Type predicate functions are user-defined functions that return whether their
argument is an instance of a particular type.
`TypeGuard` works similarly to `TypeIs`, but has subtly different
effects on type checking behavior (see below).

Using  `-> TypeGuard` tells the static type checker that for a given
function:

1. The return value is a boolean.
2. If the return value is `True`, the type of its argument
   is the type inside `TypeGuard`.

`TypeGuard` also works with type variables.  See PEP 647 for more details.

For example::

      def is_str_list(val: list[object]) -> TypeGuard[list[str]]:
          '''Determines whether all objects in the list are strings'''
          return all(isinstance(x, str) for x in val)

      def func1(val: list[object]):
          if is_str_list(val):
              # Type of `val` is narrowed to `list[str]`.
              print(" ".join(val))
          else:
              # Type of `val` remains as `list[object]`.
              print("Not a list of strings!")

`TypeIs` and `TypeGuard` differ in the following ways:

* `TypeIs` requires the narrowed type to be a subtype of the input type, while
  `TypeGuard` does not.  The main reason is to allow for things like
  narrowing `list[object]` to `list[str]` even though the latter
  is not a subtype of the former, since `list` is invariant.
* When a `TypeGuard` function returns `True`, type checkers narrow the type of the
  variable to exactly the `TypeGuard` type. When a `TypeIs` function returns `True`,
  type checkers can infer a more precise type combining the previously known type of the
  variable with the `TypeIs` type. (Technically, this is known as an intersection type.)
* When a `TypeGuard` function returns `False`, type checkers cannot narrow the type of
  the variable at all. When a `TypeIs` function returns `False`, type checkers can narrow
  the type of the variable to exclude the `TypeIs` type.

> *Added in 3.10*
