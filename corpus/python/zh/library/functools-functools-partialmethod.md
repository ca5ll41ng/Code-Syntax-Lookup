---
id: "python-zh-function-functools-partialmethod"
language: "python"
lang: "zh"
category: "function"
name: "partialmethod"
signature: "partialmethod(func, /, *args, **keywords)"
directive: "class"
module: "functools"
source_url: "https://docs.python.org/zh-cn/3/library/functools.html#functools.partialmethod"
license: "PSF"
updated: "2026-10-01"
---

# partialmethod

Return a new `partialmethod` descriptor which behaves
like `partial` except that it is designed to be used as a method
definition rather than being directly callable.

*func* must be a `descriptor` or a callable (objects which are both,
like normal functions, are handled as descriptors).

When *func* is a descriptor (such as a normal Python function,
`classmethod`, `staticmethod`, `~abc.abstractmethod` or
another instance of `partialmethod`), calls to `__get__` are
delegated to the underlying descriptor, and an appropriate
`partial object` returned as the result.

When *func* is a non-descriptor callable, an appropriate bound method is
created dynamically. This behaves like a normal Python function when
used as a method: the *self* argument will be inserted as the first
positional argument, even before the *args* and *keywords* supplied to
the `partialmethod` constructor.

示例::

   >>> class Cell:
   ...     def __init__(self):
   ...         self._alive = False
   ...     @property
   ...     def alive(self):
   ...         return self._alive
   ...     def set_state(self, state):
   ...         self._alive = bool(state)
   ...     set_alive = partialmethod(set_state, True)
   ...     set_dead = partialmethod(set_state, False)
   ...
   >>> c = Cell()
   >>> c.alive
   False
   >>> c.set_alive()
   >>> c.alive
   True

> *Added in 3.4*
