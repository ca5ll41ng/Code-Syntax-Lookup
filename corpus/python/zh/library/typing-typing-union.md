---
id: "python-zh-function-typing-union"
language: "python"
lang: "zh"
category: "function"
name: "Union"
directive: "class"
module: "typing"
source_url: "https://docs.python.org/zh-cn/3/library/typing.html#typing.Union"
license: "PSF"
updated: "2026-10-01"
---

# Union

联合类型； ``Union[X, Y]`` 等价于 ``X | Y`` ，意味着满足 X 或 Y 之一。

要定义一个联合类型，可以使用类似 ``Union[int, str]`` 或简写 ``int | str``。建议使用这种简写。细节:

* The arguments must be types and there must be at least one.

* Unions of unions are flattened, e.g.::

    Union[Union[int, str], float] == Union[int, str, float]

  However, this does not apply to unions referenced through a type
  alias, to avoid forcing evaluation of the underlying `TypeAliasType`::

    type A = Union[int, str]
    Union[A, float] != Union[int, str, float]

* Unions of a single argument vanish, e.g.::

    Union[int] == int  # The constructor actually returns int

* Redundant arguments are skipped, e.g.::

    Union[int, str, int] == Union[int, str] == int | str

* When comparing unions, the argument order is ignored, e.g.::

    Union[int, str] == Union[str, int]

* You cannot subclass or instantiate a `Union`.

* You cannot write `Union[X][Y]`.

> *Changed in 3.7*: Don't remove explicit subclasses from unions at runtime.

> *Changed in 3.10*: Unions can now be written as ``X | Y``. See :ref:`union type expressions<types-union>`.

> *Changed in 3.14*: :class:`types.UnionType` is now an alias for :class:`Union`, and both ``Union[int, str]`` and ``int | str`` create instances of the same class. To check whether an object is a ``Union`` at runtime, use ``isinstance(obj, Union)``. For compatibility with earlier versions of Python, use ``get_origin(obj) is typing.Union or get_origin(obj) is types.UnionType``.
