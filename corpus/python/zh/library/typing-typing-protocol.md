---
id: "python-zh-function-typing-protocol"
language: "python"
lang: "zh"
category: "function"
name: "Protocol"
signature: "Protocol(Generic)"
directive: "class"
module: "typing"
source_url: "https://docs.python.org/zh-cn/3/library/typing.html#typing.Protocol"
license: "PSF"
updated: "2026-10-01"
---

# Protocol

协议类的基类。

协议类是这样定义的::

   class Proto(Protocol):
       def meth(self) -> int:
           ...

Such classes are primarily used with static type checkers that recognize
structural subtyping (static duck-typing), for example::

   class C:
       def meth(self) -> int:
           return 0

   def func(x: Proto) -> int:
       return x.meth()

   func(C())  # Passes static type check

See PEP 544 for more details. Protocol classes decorated with
`runtime_checkable` (described later) act as simple-minded runtime
protocols that check only the presence of given attributes, ignoring their
type signatures. Protocol classes without this decorator cannot be used
as the second argument to `isinstance` or `issubclass`.

Protocol 类可以是泛型，例如：

   class GenProto[T](Protocol):
       def meth(self) -> T:
           ...

In code that needs to be compatible with Python 3.11 or older, generic
Protocols can be written as follows::

   T = TypeVar("T")

   class GenProto(Protocol[T]):
       def meth(self) -> T:
           ...

> *Added in 3.8*

deprecated-removed:: 3.15 3.20
