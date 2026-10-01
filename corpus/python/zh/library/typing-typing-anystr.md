---
id: "python-zh-function-typing-anystr"
language: "python"
lang: "zh"
category: "function"
name: "AnyStr"
directive: "data"
module: "typing"
source_url: "https://docs.python.org/zh-cn/3/library/typing.html#typing.AnyStr"
license: "PSF"
updated: "2026-10-01"
---

# AnyStr

:ref:`受约束的类型变量 <typing-constrained-typevar>`。

定义：

   AnyStr = TypeVar('AnyStr', str, bytes)

`AnyStr` is meant to be used for functions that may accept `str` or
`bytes` arguments but cannot allow the two to mix.

例如：

   def concat(a: AnyStr, b: AnyStr) -> AnyStr:
       return a + b

   concat("foo", "bar")    # OK, output has type 'str'
   concat(b"foo", b"bar")  # OK, output has type 'bytes'
   concat("foo", b"bar")   # Error, cannot mix str and bytes

Note that, despite its name, `AnyStr` has nothing to do with the
`Any` type, nor does it mean "any string". In particular, `AnyStr`
and `str | bytes` are different from each other and have different use
cases::

   # Invalid use of AnyStr:
   # The type variable is used only once in the function signature,
   # so cannot be "solved" by the type checker
   def greet_bad(cond: bool) -> AnyStr:
       return "hi there!" if cond else b"greetings!"

   # The better way of annotating this function:
   def greet_proper(cond: bool) -> str | bytes:
       return "hi there!" if cond else b"greetings!"

deprecated-removed:: 3.13 3.18
