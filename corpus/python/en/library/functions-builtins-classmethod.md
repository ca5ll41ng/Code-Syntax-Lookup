---
id: "python-en-function-builtins-classmethod"
language: "python"
lang: "en"
category: "function"
name: "classmethod"
directive: "decorator"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#classmethod"
license: "PSF"
updated: "2026-10-01"
---

# classmethod

Transform a method into a class method.

A class method receives the class as an implicit first argument, just like an
instance method receives the instance. To declare a class method, use this
idiom::

   class C:
       @classmethod
       def f(cls, arg1, arg2): ...

The `@classmethod` form is a function `decorator` -- see
`function` for details.

A class method can be called either on the class (such as `C.f()`) or on an instance (such
as `C().f()`).  The instance is ignored except for its class. If a class
method is called for a derived class, the derived class object is passed as the
implied first argument.

Class methods are different than C++ or Java static methods. If you want those,
see `staticmethod` in this section.
For more information on class methods, see `types`.

> *Changed in 3.9*: Class methods can now wrap other :term:`descriptors <descriptor>` such as :func:`property`.

> *Changed in 3.10*: Class methods now inherit the method attributes (:attr:`~function.__module__`, :attr:`~function.__name__`, :attr:`~function.__qualname__`, :attr:`~function.__doc__` and :attr:`~function.__annotations__`) and have a new ``__wrapped__`` attribute.

deprecated-removed:: 3.11 3.13
