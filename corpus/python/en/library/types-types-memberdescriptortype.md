---
id: "python-en-function-types-memberdescriptortype"
language: "python"
lang: "en"
category: "function"
name: "MemberDescriptorType"
directive: "class"
module: "types"
source_url: "https://docs.python.org/3/library/types.html#types.MemberDescriptorType"
license: "PSF"
updated: "2026-10-01"
---

# MemberDescriptorType

The type of objects defined in extension modules with `PyMemberDef`, such
as `datetime.timedelta.days`.  This type is used as descriptor for simple C
data members which use standard conversion functions; it has the same purpose
as the `property` type, but for classes defined in extension modules.

In addition, when a class is defined with a `~object.__slots__` attribute, then for
each slot, an instance of `MemberDescriptorType` will be added as an attribute
on the class. This allows the slot to appear in the class's `~type.__dict__`.

impl-detail::
