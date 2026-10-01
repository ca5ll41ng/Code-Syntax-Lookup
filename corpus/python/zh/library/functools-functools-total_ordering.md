---
id: "python-zh-function-functools-total_ordering"
language: "python"
lang: "zh"
category: "function"
name: "total_ordering"
directive: "decorator"
module: "functools"
source_url: "https://docs.python.org/zh-cn/3/library/functools.html#functools.total_ordering"
license: "PSF"
updated: "2026-10-01"
---

# total_ordering

Given a class defining one or more rich comparison ordering methods, this
class decorator supplies the rest.  This simplifies the effort involved
in specifying all of the possible rich comparison operations:

The class must define one of `~object.__lt__`, `~object.__le__`,
`~object.__gt__`, or `~object.__ge__`.
In addition, the class should supply an `~object.__eq__` method.

例如::

    @total_ordering
    class Student:
        def _is_valid_operand(self, other):
            return (hasattr(other, "lastname") and
                    hasattr(other, "firstname"))
        def __eq__(self, other):
            if not self._is_valid_operand(other):
                return NotImplemented
            return ((self.lastname.lower(), self.firstname.lower()) ==
                    (other.lastname.lower(), other.firstname.lower()))
        def __lt__(self, other):
            if not self._is_valid_operand(other):
                return NotImplemented
            return ((self.lastname.lower(), self.firstname.lower()) <
                    (other.lastname.lower(), other.firstname.lower()))

> **Note**
>
> While this decorator makes it easy to create well behaved totally
> ordered types, it *does* come at the cost of slower execution and
> more complex stack traces for the derived comparison methods. If
> performance benchmarking indicates this is a bottleneck for a given
> application, implementing all six rich comparison methods instead is
> likely to provide an easy speed boost.
>

> **Note**
>
> This decorator makes no attempt to override methods that have been
> declared in the class *or its superclasses*. Meaning that if a
> superclass defines a comparison operator, *total_ordering* will not
> implement it again, even if the original method is abstract.
>

> *Added in 3.2*

> *Changed in 3.4*: Returning ``NotImplemented`` from the underlying comparison function for unrecognised types is now supported.
