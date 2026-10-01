---
id: "python-en-function-unittest-mock-patch-dict"
language: "python"
lang: "en"
category: "function"
name: "patch.dict"
signature: "patch.dict(in_dict, values=(), clear=False, **kwargs)"
directive: "function"
module: "unittest.mock"
source_url: "https://docs.python.org/3/library/unittest.mock.html#unittest.mock.patch.dict"
license: "PSF"
updated: "2026-10-01"
---

# patch.dict

Patch a dictionary, or dictionary like object, and restore the dictionary
to its original state after the test, where the restored dictionary is a
copy of the dictionary as it was before the test.

*in_dict* can be a dictionary or a mapping like container. If it is a
mapping then it must at least support getting, setting and deleting items
plus iterating over keys.

*in_dict* can also be a string specifying the name of the dictionary, which
will then be fetched by importing it.

*values* can be a dictionary of values to set in the dictionary. *values*
can also be an iterable of `(key, value)` pairs.

If *clear* is true then the dictionary will be cleared before the new
values are set.

`patch.dict` can also be called with arbitrary keyword arguments to set
values in the dictionary.

> *Changed in 3.8*: :func:`patch.dict` now returns the patched dictionary when used as a context manager.
