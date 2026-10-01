---
id: "python-zh-function-dataclasses-field"
language: "python"
lang: "zh"
category: "function"
name: "field"
signature: "field(*, default=MISSING, default_factory=MISSING, init=True, repr=True, hash=None, compare=True, metadata=None, kw_only=MISSING, doc=None)"
directive: "function"
module: "dataclasses"
source_url: "https://docs.python.org/zh-cn/3/library/dataclasses.html#dataclasses.field"
license: "PSF"
updated: "2026-10-01"
---

# field

For common and simple use cases, no other functionality is
required.  There are, however, some dataclass features that
require additional per-field information.  To satisfy this need for
additional information, you can replace the default field value
with a call to the provided `field` function.  For example::

  @dataclass
  class C:
      mylist: list[int] = field(default_factory=list)

  c = C()
  c.mylist += [1, 2, 3]

As shown above, the `MISSING` value is a `sentinel` object
used to detect if some parameters are provided by the user. This sentinel is
used because `None` is a valid value for some parameters with
a distinct meaning.  No code should directly use the `MISSING` value.

传给 :func:`!field` 的形参有：

- *default*: If provided, this will be the default value for this
  field.  This is needed because the `field` call itself
  replaces the normal position of the default value.

- *default_factory*: If provided, it must be a zero-argument
  callable that will be called when a default value is needed for
  this field.  Among other purposes, this can be used to specify
  fields with mutable default values, as discussed below.  It is an
  error to specify both *default* and *default_factory*.

- *init*: If true (the default), this field is included as a
  parameter to the generated `~object.__init__` method.

- *repr*: If true (the default), this field is included in the
  string returned by the generated `~object.__repr__` method.

- *hash*: This can be a bool or `None`.  If true, this field is
  included in the generated `~object.__hash__` method.  If false,
  this field is excluded from the generated `~object.__hash__`.
  If `None` (the default), use the value of *compare*: this would
  normally be the expected behavior, since a field should be included
  in the hash if it's used for comparisons.  Setting this value to anything
  other than `None` is discouraged.

  One possible reason to set `hash=False` but `compare=True`
  would be if a field is expensive to compute a hash value for,
  that field is needed for equality testing, and there are other
  fields that contribute to the type's hash value.  Even if a field
  is excluded from the hash, it will still be used for comparisons.

- *compare*: If true (the default), this field is included in the
  generated equality and comparison methods (`~object.__eq__`,
  `~object.__gt__`, et al.).

- *metadata*: This can be a mapping or `None`. `None` is treated as
  an empty dict.  This value is wrapped in
  `~types.MappingProxyType` to make it read-only, and exposed
  on the `Field` object. It is not used at all by Data
  Classes, and is provided as a third-party extension mechanism.
  Multiple third-parties can each have their own key, to use as a
  namespace in the metadata.

- *kw_only*: If true, this field will be marked as keyword-only.
  This is used when the generated `~object.__init__` method's
  parameters are computed.

  Keyword-only fields are also not included in `__match_args__`.

> *Added in 3.10*

- *doc*: optional docstring for this field.

> *Added in 3.14*

If the default value of a field is specified by a call to
`field`, then the class attribute for this field will be
replaced by the specified *default* value.  If *default* is not
provided, then the class attribute will be deleted.  The intent is
that after the `dataclass` decorator runs, the class
attributes will all contain the default values for the fields, just
as if the default value itself were specified.  For example,
after::

  @dataclass
  class C:
      x: int
      y: int = field(repr=False)
      z: int = field(repr=False, default=10)
      t: int = 20

The class attribute `C.z` will be `10`, the class attribute
`C.t` will be `20`, and the class attributes `C.x` and
`C.y` will not be set.

> *Changed in 3.15*: If *metadata* is ``None``, use an empty :class:`frozendict`, instead of a :func:`~types.MappingProxyType` of an empty :class:`dict`.
