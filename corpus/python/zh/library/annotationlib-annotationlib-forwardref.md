---
id: "python-zh-function-annotationlib-forwardref"
language: "python"
lang: "zh"
category: "function"
name: "ForwardRef"
directive: "class"
module: "annotationlib"
source_url: "https://docs.python.org/zh-cn/3/library/annotationlib.html#annotationlib.ForwardRef"
license: "PSF"
updated: "2026-10-01"
---

# ForwardRef

用于注解中前向引用的代理对象。

Instances of this class are returned when the `~Format.FORWARDREF`
format is used and annotations contain a name that cannot be resolved.
This can happen when a forward reference is used in an annotation, such as
when a class is referenced before it is defined.

attribute:: __forward_arg__

method:: evaluate(*, owner=None, globals=None, locals=None, type_params=None, format=Format.VALUE)

> *Added in 3.14*
