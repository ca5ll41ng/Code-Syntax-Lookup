---
id: "python-zh-function-types-prepare_class"
language: "python"
lang: "zh"
category: "function"
name: "prepare_class"
signature: "prepare_class(name, bases=(), kwds=None)"
directive: "function"
module: "types"
source_url: "https://docs.python.org/zh-cn/3/library/types.html#types.prepare_class"
license: "PSF"
updated: "2026-10-01"
---

# prepare_class

计算适当的元类并创建类命名空间。

The arguments are the components that make up a class definition header:
the class name, the base classes (in order) and the keyword arguments
(such as `metaclass`).

返回值是一个 3 元组: ``metaclass, namespace, kwds``

*metaclass* is the appropriate metaclass, *namespace* is the
prepared class namespace and *kwds* is an updated copy of the passed
in *kwds* argument with any `'metaclass'` entry removed. If no *kwds*
argument is passed in, this will be an empty dict.

> *Added in 3.3*

> *Changed in 3.6*: The default value for the ``namespace`` element of the returned tuple has changed.  Now an insertion-order-preserving mapping is used when the metaclass does not have a ``__prepare__`` method.
