---
id: "python-zh-function-typing-no_type_check"
language: "python"
lang: "zh"
category: "function"
name: "no_type_check"
directive: "decorator"
module: "typing"
source_url: "https://docs.python.org/zh-cn/3/library/typing.html#typing.no_type_check"
license: "PSF"
updated: "2026-10-01"
---

# no_type_check

标明注解不是类型提示的装饰器。

This works as a class or function `decorator`.  With a class, it
applies recursively to all methods and classes defined in that class
(but not to methods defined in its superclasses or subclasses). Type
checkers will ignore all annotations in a function or class with this
decorator.

``@no_type_check`` 将原地改变被装饰的对象。
