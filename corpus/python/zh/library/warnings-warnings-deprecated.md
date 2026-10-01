---
id: "python-zh-function-warnings-deprecated"
language: "python"
lang: "zh"
category: "function"
name: "deprecated"
signature: "deprecated(message, /, *, category=DeprecationWarning, stacklevel=1)"
directive: "decorator"
module: "warnings"
source_url: "https://docs.python.org/zh-cn/3/library/warnings.html#warnings.deprecated"
license: "PSF"
updated: "2026-10-01"
---

# deprecated

指明某个类、函数或重载已被弃用的装饰器。

When this decorator is applied to an object,
deprecation warnings may be emitted at runtime when the object is used.
`static type checkers`
will also generate a diagnostic on usage of the deprecated object.

用法：

   from warnings import deprecated
   from typing import overload

   @deprecated("Use B instead")
   class A:
       pass

   @deprecated("Use g instead")
   def f():
       pass

   @overload
   @deprecated("int support is deprecated")
   def g(x: int) -> int: ...
   @overload
   def g(x: str) -> int: ...

The warning specified by *category* will be emitted at runtime
on use of deprecated objects. For functions, that happens on calls;
for classes, on instantiation and on creation of subclasses.
If the *category* is `None`, no warning is emitted at runtime.
The *stacklevel* determines where the
warning is emitted. If it is `1` (the default), the warning
is emitted at the direct caller of the deprecated object; if it
is higher, it is emitted further up the stack.
Static type checker behavior is not affected by the *category*
and *stacklevel* arguments.

The deprecation message passed to the decorator is saved in the
`__deprecated__` attribute on the decorated object.
If applied to an overload, the decorator
must be after the `~typing.overload` decorator
for the attribute to exist on the overload as returned by
`typing.get_overloads`.

> *Added in 3.13*: See :pep:`702`.
