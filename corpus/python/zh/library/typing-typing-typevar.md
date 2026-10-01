---
id: "python-zh-function-typing-typevar"
language: "python"
lang: "zh"
category: "function"
name: "TypeVar"
signature: "TypeVar(name, *constraints, bound=None, covariant=False, contravariant=False, infer_variance=False, default=typing.NoDefault)"
directive: "class"
module: "typing"
source_url: "https://docs.python.org/zh-cn/3/library/typing.html#typing.TypeVar"
license: "PSF"
updated: "2026-10-01"
---

# TypeVar

类型变量。

The preferred way to construct a type variable is via the dedicated syntax
for `generic functions`,
`generic classes`, and
`generic type aliases`::

   class Sequence[T]:  # T is a TypeVar
       ...

This syntax can also be used to create bounded and constrained type
variables::

   class StrSequence[S: str]:  # S is a TypeVar with a `str` upper bound;
       ...                     # we can say that S is "bounded by `str`"

   class StrOrBytesSequence[A: (str, bytes)]:  # A is a TypeVar constrained to str or bytes
       ...

不过，如有需要，也可通过手动方式来构造可重用的类型变量，就像这样::

   T = TypeVar('T')  # Can be anything
   S = TypeVar('S', bound=str)  # Can be any subtype of str
   A = TypeVar('A', str, bytes)  # Must be exactly str or bytes

Type variables exist primarily for the benefit of static type
checkers.  They serve as the parameters for generic types as well
as for generic function and type alias definitions.
See `Generic` for more
information on generic types.  Generic functions work as follows::

   def repeat[T](x: T, n: int) -> Sequence[T]:
       """Return a list containing n references to x."""
       return [x]*n

   def print_capitalized[S: str](x: S) -> S:
       """Print x capitalized, and return x."""
       print(x.capitalize())
       return x

   def concatenate[A: (str, bytes)](x: A, y: A) -> A:
       """Add two strings or bytes objects together."""
       return x + y

Note that type variables can be *bounded*, *constrained*, or neither, but
cannot be both bounded *and* constrained.

The variance of type variables is inferred by type checkers when they are created
through the `type parameter syntax` or when
`infer_variance=True` is passed.
Manually created type variables may be explicitly marked covariant or contravariant by passing
`covariant=True` or `contravariant=True`.
By default, manually created type variables are invariant.
See PEP 484 and PEP 695 for more details.

Bounded type variables and constrained type variables have different
semantics in several important ways. Using a *bounded* type variable means
that the `TypeVar` will be solved using the most specific type possible::

   x = print_capitalized('a string')
   reveal_type(x)  # revealed type is str

   class StringSubclass(str):
       pass

   y = print_capitalized(StringSubclass('another string'))
   reveal_type(y)  # revealed type is StringSubclass

   z = print_capitalized(45)  # error: int is not a subtype of str

The upper bound of a type variable can be a concrete type, abstract type
(ABC or Protocol), or even a union of types::

   # Can be anything with an __abs__ method
   def print_abs[T: SupportsAbs](arg: T) -> None:
       print("Absolute value:", abs(arg))

   U = TypeVar('U', bound=strbytes)  # Can be any subtype of the union strbytes
   V = TypeVar('V', bound=SupportsAbs)  # Can be anything with an __abs__ method

.. _typing-constrained-typevar:

Using a *constrained* type variable, however, means that the `TypeVar`
can only ever be solved as being exactly one of the constraints given::

   a = concatenate('one', 'two')
   reveal_type(a)  # revealed type is str

   b = concatenate(StringSubclass('one'), StringSubclass('two'))
   reveal_type(b)  # revealed type is str, despite StringSubclass being passed in

   c = concatenate('one', b'two')  # error: type variable 'A' can be either str or bytes in a function call, but not both

在运行时，``isinstance(x, T)`` 将引发 :exc:`TypeError`。

attribute:: __name__

attribute:: __covariant__

attribute:: __contravariant__

attribute:: __infer_variance__

attribute:: __bound__

method:: evaluate_bound

attribute:: __constraints__

method:: evaluate_constraints

attribute:: __default__

method:: evaluate_default

method:: has_default()

> *Changed in 3.12*: Type variables can now be declared using the :ref:`type parameter <type-params>` syntax introduced by :pep:`695`. The ``infer_variance`` parameter was added.

> *Changed in 3.13*: Support for default values was added.
