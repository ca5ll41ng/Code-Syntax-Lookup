---
id: "python-en-function-dataclasses-astuple"
language: "python"
lang: "en"
category: "function"
name: "astuple"
signature: "astuple(obj, *, tuple_factory=tuple)"
directive: "function"
module: "dataclasses"
source_url: "https://docs.python.org/3/library/dataclasses.html#dataclasses.astuple"
license: "PSF"
updated: "2026-10-01"
---

# astuple

Converts the dataclass *obj* to a tuple (by using the
factory function *tuple_factory*).  Each dataclass is converted
to a tuple of its field values.  dataclasses, dicts, frozendicts, lists,
and tuples are recursed into. Other objects are copied with
`copy.deepcopy`.

Continuing from the previous example::

  assert astuple(p) == (10, 20)
  assert astuple(c) == ([(0, 0), (10, 4)],)

To create a shallow copy, the following workaround may be used::

  tuple(getattr(obj, field.name) for field in dataclasses.fields(obj))

`astuple` raises `TypeError` if *obj* is not a dataclass
instance.
