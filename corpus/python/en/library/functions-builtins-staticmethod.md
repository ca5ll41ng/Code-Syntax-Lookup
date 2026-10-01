---
id: "python-en-function-builtins-staticmethod"
language: "python"
lang: "en"
category: "function"
name: "staticmethod"
directive: "decorator"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#staticmethod"
license: "PSF"
updated: "2026-10-01"
---

# staticmethod

Transform a method into a static method.

A static method does not receive an implicit first argument. To declare a static
method, use this idiom::

   class C:
       @staticmethod
       def f(arg1, arg2, argN): ...

The `@staticmethod` form is a function `decorator` -- see
`function` for details.

A static method can be called either on the class (such as `C.f()`) or on
an instance (such as `C().f()`).
Moreover, the static method `descriptor` is also callable, so it can
be used in the class definition (such as `f()`).

Static methods in Python are similar to those found in Java or C++. Also, see
`classmethod` for a variant that is useful for creating alternate class
constructors.

Like all decorators, it is also possible to call `staticmethod` as
a regular function and do something with its result.  This is needed
in some cases where you need a reference to a function from a class
body and you want to avoid the automatic transformation to instance
method.  For these cases, use this idiom::

   def regular_function():
       ...

   class C:
       method = staticmethod(regular_function)

For more information on static methods, see `types`.

> *Changed in 3.10*: Static methods now inherit the method attributes (:attr:`~function.__module__`, :attr:`~function.__name__`, :attr:`~function.__qualname__`, :attr:`~function.__doc__` and :attr:`~function.__annotations__`), have a new ``__wrapped__`` attribute, and are now callable as regular functions.
