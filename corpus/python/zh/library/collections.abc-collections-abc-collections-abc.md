---
id: "python-zh-function-collections-abc-collections-abc"
language: "python"
lang: "zh"
category: "function"
name: "collections.abc"
title: "Examples and Recipes"
directive: "module"
module: "collections.abc"
source_url: "https://docs.python.org/zh-cn/3/library/collections.abc.html#module-collections.abc"
license: "PSF"
updated: "2026-10-01"
---

# Examples and Recipes

**Examples and Recipes**

ABCs allow us to ask classes or instances if they provide
particular functionality, for example::

    size = None
    if isinstance(myvar, collections.abc.Sized):
        size = len(myvar)

Several of the ABCs are also useful as mixins that make it easier to develop
classes supporting container APIs.  For example, to write a class supporting
the full `Set` API, it is only necessary to supply the three underlying
abstract methods: `~object.__contains__`, `~container.__iter__`, and
`~object.__len__`. The ABC supplies the remaining methods such as
`__and__` and `~frozenset.isdisjoint`::

    class ListBasedSet(collections.abc.Set):
        ''' Alternate set implementation favoring space over speed
            and not requiring the set elements to be hashable. '''
        def __init__(self, iterable):
            self.elements = lst = []
            for value in iterable:
                if value not in lst:
                    lst.append(value)

        def __iter__(self):
            return iter(self.elements)

        def __contains__(self, value):
            return value in self.elements

        def __len__(self):
            return len(self.elements)

    s1 = ListBasedSet('abcdef')
    s2 = ListBasedSet('defghi')
    overlap = s1 & s2            # The __and__() method is supported automatically

当把 :class:`Set` 和 :class:`MutableSet` 用作混入类时需注意：

(1)
   Since some set operations create new sets, the default mixin methods need
   a way to create new instances from an `iterable`. The class constructor is
   assumed to have a signature in the form `ClassName(iterable)`.
   That assumption is factored-out to an internal `classmethod` called
   `_from_iterable` which calls `cls(iterable)` to produce a new set.
   If the `Set` mixin is being used in a class with a different
   constructor signature, you will need to override `_from_iterable`
   with a classmethod or regular method that can construct new instances from
   an iterable argument.

(2)
   To override the comparisons (presumably for speed, as the
   semantics are fixed), redefine `~object.__le__` and
   `~object.__ge__`,
   then the other operations will automatically follow suit.

(3)
   The `Set` mixin provides a `_hash` method to compute a hash value
   for the set; however, `~object.__hash__` is not defined because not all sets
   are `hashable` or immutable.  To add set hashability using mixins,
   inherit from both `Set` and `Hashable`, then define
   `__hash__ = Set._hash`.

> **Seealso**
>
> * [OrderedSet recipe](https://code.activestate.com/recipes/576694/) for an
>   example built on `MutableSet`.
>
> * For more about ABCs, see the `abc` module and PEP 3119.
>
