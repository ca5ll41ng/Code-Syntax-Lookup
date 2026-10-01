---
id: "python-en-function-pickle-object-__getstate__"
language: "python"
lang: "en"
category: "function"
name: "object.__getstate__"
signature: "object.__getstate__()"
directive: "method"
module: "pickle"
source_url: "https://docs.python.org/3/library/pickle.html#pickle.object.__getstate__"
license: "PSF"
updated: "2026-10-01"
---

# object.__getstate__

Classes can further influence how their instances are pickled by overriding
the method `__getstate__`.  It is called and the returned object
is pickled as the contents for the instance, instead of a default state.
There are several cases:

* For a class that has no instance `~object.__dict__` and no
  `~object.__slots__`, the default state is `None`.

* For a class that has an instance `~object.__dict__` and no
  `~object.__slots__`, the default state is `self.__dict__`.

* For a class that has an instance `~object.__dict__` and
  `~object.__slots__`, the default state is a tuple consisting of two
  dictionaries:  `self.__dict__`, and a dictionary mapping slot
  names to slot values.  Only slots that have a value are
  included in the latter.

* For a class that has `~object.__slots__` and no instance
  `~object.__dict__`, the default state is a tuple whose first item
  is `None` and whose second item is a dictionary mapping slot names
  to slot values described in the previous bullet.

> *Changed in 3.11*: Added the default implementation of the ``__getstate__()`` method in the :class:`object` class.
