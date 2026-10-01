---
id: "python-en-function-dataclasses-asdict"
language: "python"
lang: "en"
category: "function"
name: "asdict"
signature: "asdict(obj, *, dict_factory=dict)"
directive: "function"
module: "dataclasses"
source_url: "https://docs.python.org/3/library/dataclasses.html#dataclasses.asdict"
license: "PSF"
updated: "2026-10-01"
---

# asdict

Converts the dataclass *obj* to a dict (by using the
factory function *dict_factory*).  Each dataclass is converted
to a dict of its fields, as `name: value` pairs.  dataclasses, dicts,
frozendicts, lists, and tuples are recursed into.  Other objects are copied
with `copy.deepcopy`.

Example of using `asdict` on nested dataclasses::

  @dataclass
  class Point:
       x: int
       y: int

  @dataclass
  class C:
       mylist: list[Point]

  p = Point(10, 20)
  assert asdict(p) == {'x': 10, 'y': 20}

  c = C([Point(0, 0), Point(10, 4)])
  assert asdict(c) == {'mylist': [{'x': 0, 'y': 0}, {'x': 10, 'y': 4}]}

To create a shallow copy, the following workaround may be used::

  {field.name: getattr(obj, field.name) for field in fields(obj)}

`asdict` raises `TypeError` if *obj* is not a dataclass
instance.
