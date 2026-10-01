---
id: "python-zh-function-typing-classvar"
language: "python"
lang: "zh"
category: "function"
name: "ClassVar"
directive: "data"
module: "typing"
source_url: "https://docs.python.org/zh-cn/3/library/typing.html#typing.ClassVar"
license: "PSF"
updated: "2026-10-01"
---

# ClassVar

特殊类型注解构造，用于标注类变量。

As introduced in PEP 526, a variable annotation wrapped in ClassVar
indicates that a given attribute is intended to be used as a class variable
and should not be set on instances of that class. Usage::

   class Starship:
       stats: ClassVar[dict[str, int]] = {} # class variable
       damage: int = 10                     # instance variable

:data:`ClassVar` 仅接受类型，也不能使用下标。

`ClassVar` is not a class itself, and cannot
be used with `isinstance` or `issubclass`.
`ClassVar` does not change Python runtime behavior, but
it can be used by static type checkers. For example, a type checker
might flag the following code as an error::

   enterprise_d = Starship(3000)
   enterprise_d.stats = {} # Error, setting class variable on instance
   Starship.stats = {}     # This is OK

> *Added in 3.5.3*

> *Changed in 3.13*: :data:`ClassVar` can now be nested in :data:`Final` and vice versa.
