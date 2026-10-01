---
id: "python-en-function-typing-paramspec"
language: "python"
lang: "en"
category: "function"
name: "ParamSpec"
signature: "ParamSpec(name, *, bound=None, covariant=False, contravariant=False, infer_variance=False, default=typing.NoDefault)"
directive: "class"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.ParamSpec"
license: "PSF"
updated: "2026-10-01"
---

# ParamSpec

Parameter specification variable.  A specialized version of
`type variables`.

In `type parameter lists`, parameter specifications
can be declared with two asterisks (`**`)::

   type IntFunc[**P] = Callable[P, int]

For compatibility with Python 3.11 and earlier, `ParamSpec` objects
can also be created as follows::

   P = ParamSpec('P')

Parameter specification variables exist primarily for the benefit of static
type checkers.  They are used to forward the parameter types of one
callable to another callable -- a pattern commonly found in higher order
functions and decorators.  They are only valid when used in `Concatenate`,
or as the first argument to `Callable`, or as parameters for user-defined
Generics.  See `Generic` for more information on generic types.

For example, to add basic logging to a function, one can create a decorator
`add_logging` to log function calls.  The parameter specification variable
tells the type checker that the callable passed into the decorator and the
new callable returned by it have inter-dependent type parameters::

   from collections.abc import Callable
   import logging

   def add_logging[T, **P](f: Callable[P, T]) -> Callable[P, T]:
       '''A type-safe decorator to add logging to a function.'''
       def inner(*args: P.args, **kwargs: P.kwargs) -> T:
           logging.info(f'{f.__name__} was called')
           return f(*args, **kwargs)
       return inner

   @add_logging
   def add_two(x: float, y: float) -> float:
       '''Add two numbers together.'''
       return x + y

Without `ParamSpec`, the simplest way to annotate this previously was to
use a `TypeVar` with upper bound `Callable[..., Any]`.  However this
causes two problems:

1. The type checker can't type check the `inner` function because
   `*args` and `**kwargs` have to be typed `Any`.
2. `~cast` may be required in the body of the `add_logging`
   decorator when returning the `inner` function, or the static type
   checker must be told to ignore the `return inner`.

attribute:: args

attribute:: kwargs

attribute:: __name__

attribute:: __covariant__

attribute:: __contravariant__

attribute:: __infer_variance__

attribute:: __default__

method:: evaluate_default

method:: has_default()

Parameter specification variables created with `covariant=True` or
`contravariant=True` can be used to declare covariant or contravariant
generic types.  The `bound` argument is also accepted, similar to
`TypeVar`.  However the actual semantics of these keywords are yet to
be decided.

> *Added in 3.10*

> *Changed in 3.12*: Parameter specifications can now be declared using the :ref:`type parameter <type-params>` syntax introduced by :pep:`695`.

> *Changed in 3.13*: Support for default values was added.

> **Note**
>
> Only parameter specification variables defined in global scope can
> be pickled.
>

> **Seealso**
>
> * PEP 612 -- Parameter Specification Variables (the PEP which introduced
>   `ParamSpec` and `Concatenate`)
> * `Concatenate`
> * `annotating-callables`
>
