---
id: "python-en-function-functools-singledispatchmethod"
language: "python"
lang: "en"
category: "function"
name: "singledispatchmethod"
signature: "singledispatchmethod(func)"
directive: "class"
module: "functools"
source_url: "https://docs.python.org/3/library/functools.html#functools.singledispatchmethod"
license: "PSF"
updated: "2026-10-01"
---

# singledispatchmethod

Transform a method into a `single-dispatch` `generic function`.

To define a generic method, decorate it with the `@singledispatchmethod`
decorator. When defining a method using `@singledispatchmethod`, note
that the dispatch happens on the type of the first non-*self* or non-*cls*
argument::

 class Negator:
     @singledispatchmethod
     def neg(self, arg):
         raise NotImplementedError("Cannot negate a")

     @neg.register
     def _(self, arg: int):
         return -arg

     @neg.register
     def _(self, arg: bool):
         return not arg

`@singledispatchmethod` supports nesting with other decorators such as
`classmethod`. Note that to allow for
`dispatcher.register`, `singledispatchmethod` must be the *outer most*
decorator. Here is the `Negator` class with the `neg` methods bound to
the class, rather than an instance of the class::

 class Negator:
     @singledispatchmethod
     @classmethod
     def neg(cls, arg):
         raise NotImplementedError("Cannot negate a")

     @neg.register
     @classmethod
     def _(cls, arg: int):
         return -arg

     @neg.register
     @classmethod
     def _(cls, arg: bool):
         return not arg

The same pattern can be used for other similar decorators:
`staticmethod`, `~abc.abstractmethod`, and others.

> *Added in 3.8*

> *Changed in 3.15*: Added support of non-:term:`descriptor` callables.
