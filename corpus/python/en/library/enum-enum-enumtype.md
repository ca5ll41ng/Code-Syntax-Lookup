---
id: "python-en-function-enum-enumtype"
language: "python"
lang: "en"
category: "function"
name: "EnumType"
directive: "class"
module: "enum"
source_url: "https://docs.python.org/3/library/enum.html#enum.EnumType"
license: "PSF"
updated: "2026-10-01"
---

# EnumType

*EnumType* is the `metaclass` for *enum* enumerations.  It is possible
to subclass *EnumType* -- see `Subclassing EnumType`
for details.

`EnumType` is responsible for setting the correct `__repr__`,
`__str__`, `__format__`, and `__reduce__` methods on the
final *enum*, as well as creating the enum members, properly handling
duplicates, providing iteration over the enum class, etc.

> *Added in 3.11*: Before 3.11 ``EnumType`` was called ``EnumMeta``, which is still available as an alias.

method:: EnumType.__call__(cls, value, names=None, *, module=None, qualname=None, type=None, start=1, boundary=None)

method:: EnumType.__contains__(cls, member)

method:: EnumType.__dir__(cls)

method:: EnumType.__getitem__(cls, name)

method:: EnumType.__iter__(cls)

method:: EnumType.__len__(cls)

attribute:: EnumType.__members__

method:: EnumType.__reversed__(cls)
