---
id: "python-en-function-inspect-isdatadescriptor"
language: "python"
lang: "en"
category: "function"
name: "isdatadescriptor"
signature: "isdatadescriptor(object)"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/3/library/inspect.html#inspect.isdatadescriptor"
license: "PSF"
updated: "2026-10-01"
---

# isdatadescriptor

Return `True` if the object is a data descriptor, but not if
`isclass`, `ismethod` or `isfunction` is true.

Data descriptors always have a `~object.__set__` method and/or
a `~object.__delete__` method.  Optionally, they may also have a
`~object.__get__` method.

Examples of data descriptors are `properties`, getsets and
member descriptors.  Note that for the latter two (defined only in C extension
modules), more specific tests are available: `isgetsetdescriptor` and
`ismemberdescriptor`, respectively.

While data descriptors may also have `~definition.__name__` and
`__doc__` attributes (as properties, getsets and member descriptors
do), this is not necessarily the case in general.

> *Changed in 3.8*: This function now reports objects with only a :meth:`~object.__set__` method as being data descriptors (the presence of :meth:`~object.__get__` is no longer required for that).  Moreover, objects with :meth:`~object.__delete__`, but not :meth:`~object.__set__`, are now properly recognized as data descriptors as well, which was not the case previously.
