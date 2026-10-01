---
id: "python-en-function-typing-typeddict"
language: "python"
lang: "en"
category: "function"
name: "TypedDict"
signature: "TypedDict(dict)"
directive: "class"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.TypedDict"
license: "PSF"
updated: "2026-10-01"
---

# TypedDict

Special construct to add type hints to a dictionary.
At runtime "`TypedDict` instances" are simply `dicts`.

`TypedDict` declares a dictionary type that expects all of its
instances to have a certain set of keys, where each key is
associated with a value of a consistent type. This expectation
is not checked at runtime but is only enforced by type checkers.
Usage::

   class Point2D(TypedDict):
       x: int
       y: int
       label: str

   a: Point2D = {'x': 1, 'y': 2, 'label': 'good'}  # OK
   b: Point2D = {'z': 3, 'label': 'bad'}           # Fails type check

   assert Point2D(x=1, y=2, label='first') == dict(x=1, y=2, label='first')

An alternative way to create a `TypedDict` is by using
function-call syntax. The second argument must be a literal `dict`::

   Point2D = TypedDict('Point2D', {'x': int, 'y': int, 'label': str})

This functional syntax allows defining keys which are not valid
`identifiers`, for example because they are
keywords or contain hyphens, or when key names must not be
`mangled` like regular private names::

   # raises SyntaxError
   class Point2D(TypedDict):
       in: int  # 'in' is a keyword
       x-y: int  # name with hyphens

   class Definition(TypedDict):
       __schema: str  # mangled to `_Definition__schema`

   # OK, functional syntax
   Point2D = TypedDict('Point2D', {'in': int, 'x-y': int})
   Definition = TypedDict('Definition', {'__schema': str})  # not mangled

By default, all keys must be present in a `TypedDict`. It is possible to
mark individual keys as non-required using `NotRequired`::

   class Point2D(TypedDict):
       x: int
       y: int
       label: NotRequired[str]

   # Alternative syntax
   Point2D = TypedDict('Point2D', {'x': int, 'y': int, 'label': NotRequired[str]})

This means that a `Point2D` `TypedDict` can have the `label`
key omitted.

It is also possible to mark all keys as non-required by default
by specifying a totality of `False`::

   class Point2D(TypedDict, total=False):
       x: int
       y: int

   # Alternative syntax
   Point2D = TypedDict('Point2D', {'x': int, 'y': int}, total=False)

This means that a `Point2D` `TypedDict` can have any of the keys
omitted. A type checker is only expected to support a literal `False` or
`True` as the value of the `total` argument. `True` is the default,
and makes all items defined in the class body required.

Individual keys of a `total=False` `TypedDict` can be marked as
required using `Required`::

   class Point2D(TypedDict, total=False):
       x: Required[int]
       y: Required[int]
       label: str

   # Alternative syntax
   Point2D = TypedDict('Point2D', {
       'x': Required[int],
       'y': Required[int],
       'label': str
   }, total=False)

It is possible for a `TypedDict` type to inherit from one or more other `TypedDict` types
using the class-based syntax.
Usage::

   class Point3D(Point2D):
       z: int

`Point3D` has three items: `x`, `y` and `z`. It is equivalent to this
definition::

   class Point3D(TypedDict):
       x: int
       y: int
       z: int

By default, a `TypedDict` is open, meaning that it may contain additional keys
at runtime beyond those defined in the class body. The *closed* class argument can
be used to control this; if `closed=True`, the `TypedDict` cannot contain additional keys.

::

   class ClosedPoint(TypedDict, closed=True):
       x: int
       y: int

   class ClosedPoint3D(ClosedPoint):  # type checker error: cannot add keys to a closed TypedDict
       z: int

Setting `closed=False` explicitly requests the default open behavior. If the argument is not
passed, this state is inherited from the parent class.

In addition to being open or closed, a `TypedDict` can also be configured to have extra items.
If the *extra_items* class argument is set to a type, the `TypedDict` can contain arbitrary
additional keys, but the values of those keys must be of the specified type.

::

   class ExtraItemsPoint(TypedDict, extra_items=int):
       x: int
       y: int

   point: ExtraItemsPoint = {'x': 1, 'y': 2, 'anything': 3}  # OK

The *extra_items* argument is also inherited through subclassing. It is unset
by default, and it may not be used together with the *closed* argument.

A `TypedDict` cannot inherit from a non-\ `TypedDict` class,
except for `Generic`. For example::

   class X(TypedDict):
       x: int

   class Y(TypedDict):
       y: int

   class Z(object): pass  # A non-TypedDict class

   class XY(X, Y): pass  # OK

   class XZ(X, Z): pass  # raises TypeError

A `TypedDict` can be generic::

   class Group[T](TypedDict):
       key: T
       group: list[T]

To create a generic `TypedDict` that is compatible with Python 3.11
or lower, inherit from `Generic` explicitly:

```python

T = TypeVar("T")

class Group(TypedDict, Generic[T]):
    key: T
    group: list[T]
```

A `TypedDict` can be introspected via `annotationlib.get_annotations`
(see `annotations-howto` for more information on annotations best practices)
and the following attributes:

attribute:: __total__

attribute:: __required_keys__

attribute:: __optional_keys__

attribute:: __readonly_keys__

attribute:: __mutable_keys__

attribute:: __closed__

attribute:: __extra_items__

See the [TypedDict](https://typing.python.org/en/latest/spec/typeddict.html#typeddict) section in the typing documentation for more examples and detailed rules.

> *Added in 3.8*

> *Changed in 3.9*: ``TypedDict`` is now a function rather than a class. It can still be used as a class base, as described above.

> *Changed in 3.11*: Added support for marking individual keys as :data:`Required` or :data:`NotRequired`. See :pep:`655`.

> *Changed in 3.11*: Added support for generic ``TypedDict``\ s.

> *Changed in 3.13*: Removed support for the keyword-argument method of creating ``TypedDict``\ s.

> *Changed in 3.13*: Support for the :data:`ReadOnly` qualifier was added. See :pep:`705`.

> *Changed in 3.15*: Support for the *closed* and *extra_items* class arguments was added. See :pep:`728`.
