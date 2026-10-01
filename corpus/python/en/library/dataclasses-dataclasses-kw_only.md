---
id: "python-en-function-dataclasses-kw_only"
language: "python"
lang: "en"
category: "function"
name: "KW_ONLY"
directive: "data"
module: "dataclasses"
source_url: "https://docs.python.org/3/library/dataclasses.html#dataclasses.KW_ONLY"
license: "PSF"
updated: "2026-10-01"
---

# KW_ONLY

A `sentinel` object used as a type annotation.  Any fields after a
pseudo-field with the type of `KW_ONLY` are marked as
keyword-only fields.  Note that a pseudo-field of type
`KW_ONLY` is otherwise completely ignored.  This includes the
name of such a field.  By convention, a name of `_` is used for a
`KW_ONLY` field.  Keyword-only fields signify
`~object.__init__` parameters that must be specified as keywords when
the class is instantiated.

In this example, the fields `y` and `z` will be marked as keyword-only fields::

 @dataclass
 class Point:
     x: float
     _: KW_ONLY
     y: float
     z: float

 p = Point(0, y=1.5, z=2.0)

In a single dataclass, it is an error to specify more than one
field whose type is `KW_ONLY`.

> *Added in 3.10*

> *Changed in 3.15*: :const:`!KW_ONLY` is now a :class:`sentinel` object.
