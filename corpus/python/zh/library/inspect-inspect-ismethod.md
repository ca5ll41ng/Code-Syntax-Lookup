---
id: "python-zh-function-inspect-ismethod"
language: "python"
lang: "zh"
category: "function"
name: "ismethod"
signature: "ismethod(object)"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/zh-cn/3/library/inspect.html#inspect.ismethod"
license: "PSF"
updated: "2026-10-01"
---

# ismethod

当该对象是一个 Python 写成的绑定方法时返回 ``True``。

> **Note**
>
> 例如，给定这样的类::
>
>     >>> class Greeter:
>     ...     def say_hello(self):
>     ...         print('hello!')
>
> A bound method (also known as an *instance method*) is created when
> accessing `say_hello` (a `function` defined in the
> `Greeter` namespace) through an instance of the `Greeter` class::
>
>     >>> instance = Greeter()
>
>     >>> instance.say_hello
>     <bound method Greeter.say_hello of <__main__.Greeter object ...>>
>     >>> ismethod(instance.say_hello)
>     True
>     >>> isfunction(instance.say_hello)
>     False
>
> Accessing `say_hello` through the `Greeter` class will return the
> function itself. For this function, `ismethod` will return
> `False`, but `isfunction` will return `True`::
>
>     >>> Greeter.say_hello
>     <function Greeter.say_hello at 0x7f7503854a90>
>     >>> ismethod(Greeter.say_hello)
>     False
>     >>> isfunction(Greeter.say_hello)
>     True
>
> 详情见 :ref:`typesmethods`。
>
