---
id: "python-en-function-inspect-ismethoddescriptor"
language: "python"
lang: "en"
category: "function"
name: "ismethoddescriptor"
signature: "ismethoddescriptor(object)"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/3/library/inspect.html#inspect.ismethoddescriptor"
license: "PSF"
updated: "2026-10-01"
---

# ismethoddescriptor

Return `True` if the object is a method descriptor, but not if
`isclass`, `ismethod` or `isfunction` is true.

This, for example, is true of `int.__add__`.  An object passing this test
has a `~object.__get__` method, but not a `~object.__set__`
method or a `~object.__delete__` method.  Beyond that, the set of
attributes varies.  A `~definition.__name__` attribute is usually
sensible, and `~definition.__doc__` often is.

Method descriptors that also pass any of the other tests (`isclass`,
`ismethod` or `isfunction`) make this function return `False`,
simply because those other tests promise more -- you can, for example, count
on having the `~method.__func__` attribute when an object passes
`ismethod`.

> *Changed in 3.13*: This function no longer incorrectly reports objects with :meth:`~object.__get__` and :meth:`~object.__delete__`, but not :meth:`~object.__set__`, as being method descriptors (such objects are data descriptors, not method descriptors).
