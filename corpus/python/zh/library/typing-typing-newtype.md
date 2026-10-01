---
id: "python-zh-function-typing-newtype"
language: "python"
lang: "zh"
category: "function"
name: "NewType"
signature: "NewType(name, tp)"
directive: "class"
module: "typing"
source_url: "https://docs.python.org/zh-cn/3/library/typing.html#typing.NewType"
license: "PSF"
updated: "2026-10-01"
---

# NewType

用于创建低开销的 :ref:`独有类型 <distinct>` 的辅助类。

A `NewType` is considered a distinct type by a type checker. At runtime,
however, calling a `NewType` returns its argument unchanged.

用法：

   UserId = NewType('UserId', int)  # Declare the NewType "UserId"
   first_user = UserId(1)  # "UserId" returns the argument unchanged at runtime

attribute:: __module__

attribute:: __name__

attribute:: __supertype__

> *Added in 3.5.2*

> *Changed in 3.10*: ``NewType`` is now a class rather than a function.
