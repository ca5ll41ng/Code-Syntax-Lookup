---
id: "python-zh-function-typing-typevartuple"
language: "python"
lang: "zh"
category: "function"
name: "TypeVarTuple"
signature: "TypeVarTuple(name, *, bound=None, covariant=False, contravariant=False, infer_variance=False, default=typing.NoDefault)"
directive: "class"
module: "typing"
source_url: "https://docs.python.org/zh-cn/3/library/typing.html#typing.TypeVarTuple"
license: "PSF"
updated: "2026-10-01"
---

# TypeVarTuple

Type variable tuple. A specialized form of `type variable`
that enables *variadic* generics.

Type variable tuples can be declared in `type parameter lists`
using a single asterisk (`*`) before the name::

   def move_first_element_to_last[T, *Ts](tup: tuple[T, *Ts]) -> tuple[*Ts, T]:
       return (*tup[1:], tup[0])

或者通过显式地调用 ``TypeVarTuple`` 构造器::

   T = TypeVar("T")
   Ts = TypeVarTuple("Ts")

   def move_first_element_to_last(tup: tuple[T, *Ts]) -> tuple[*Ts, T]:
       return (*tup[1:], tup[0])

A normal type variable enables parameterization with a single type. A type
variable tuple, in contrast, allows parameterization with an
*arbitrary* number of types by acting like an *arbitrary* number of type
variables wrapped in a tuple. For example::

   # T is bound to int, Ts is bound to ()
   # Return value is (1,), which has type tuple[int]
   move_first_element_to_last(tup=(1,))

   # T is bound to int, Ts is bound to (str,)
   # Return value is ('spam', 1), which has type tuple[str, int]
   move_first_element_to_last(tup=(1, 'spam'))

   # T is bound to int, Ts is bound to (str, float)
   # Return value is ('spam', 3.0, 1), which has type tuple[str, float, int]
   move_first_element_to_last(tup=(1, 'spam', 3.0))

   # This fails to type check (and fails at runtime)
   # because tuple[()] is not compatible with tuple[T, *Ts]
   # (at least one element is required)
   move_first_element_to_last(tup=())

Note the use of the unpacking operator `*` in `tuple[T, *Ts]`.
Conceptually, you can think of `Ts` as a tuple of type variables
`(T1, T2, ...)`. `tuple[T, *Ts]` would then become
`tuple[T, *(T1, T2, ...)]`, which is equivalent to
`tuple[T, T1, T2, ...]`. (Note that in older versions of Python, you might
see this written using `Unpack` instead, as
`Unpack[Ts]`.)

Type variable tuples must *always* be unpacked. This helps distinguish type
variable tuples from normal type variables::

   x: Ts          # Not valid
   x: tuple[Ts]   # Not valid
   x: tuple[*Ts]  # The correct way to do it

Type variable tuples can be used in the same contexts as normal type
variables. For example, in class definitions, arguments, and return types::

   class Array[*Shape]:
       def __getitem__(self, key: tuple[*Shape]) -> float: ...
       def __abs__(self) -> "Array[*Shape]": ...
       def get_shape(self) -> tuple[*Shape]: ...

类型变量元组可以很好地与普通类型变量结合在一起：

```python

class Array[DType, *Shape]:  # This is fine
    pass

class Array2[*Shape, DType]:  # This would also be fine
    pass

class Height: ...
class Width: ...

float_array_1d: Array[float, Height] = Array()     # Totally fine
int_array_2d: Array[int, Height, Width] = Array()  # Yup, fine too
```

However, note that at most one type variable tuple may appear in a single
list of type arguments or type parameters::

   x: tuple[*Ts, *Ts]            # Not valid
   class Array[*Shape, *Shape]:  # Not valid
       pass

Finally, an unpacked type variable tuple can be used as the type annotation
of `*args`::

   def call_soon[*Ts](
       callback: Callable[[*Ts], None],
       *args: *Ts
   ) -> None:
       ...
       callback(*args)

In contrast to non-unpacked annotations of `*args` - e.g. `*args: int`,
which would specify that *all* arguments are `int` - `*args: *Ts`
enables reference to the types of the *individual* arguments in `*args`.
Here, this allows us to ensure the types of the `*args` passed
to `call_soon` match the types of the (positional) arguments of
`callback`.

关于类型变量元组的更多细节，请参见 :pep:`646`。

attribute:: __name__

attribute:: __covariant__

attribute:: __contravariant__

attribute:: __infer_variance__

attribute:: __default__

method:: evaluate_default

method:: has_default()

Type variable tuples created with `covariant=True` or
`contravariant=True` can be used to declare covariant or contravariant
generic types.  The `bound` argument is also accepted, similar to
`TypeVar`, but its actual semantics are yet to be decided.

> *Added in 3.11*

> *Changed in 3.12*: Type variable tuples can now be declared using the :ref:`type parameter <type-params>` syntax introduced by :pep:`695`.

> *Changed in 3.13*: Support for default values was added.

> *Changed in 3.15*: Added support for the ``bound``, ``covariant``, ``contravariant``, and ``infer_variance`` parameters.
