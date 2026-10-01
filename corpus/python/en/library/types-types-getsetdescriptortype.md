---
id: "python-en-function-types-getsetdescriptortype"
language: "python"
lang: "en"
category: "function"
name: "GetSetDescriptorType"
directive: "class"
module: "types"
source_url: "https://docs.python.org/3/library/types.html#types.GetSetDescriptorType"
license: "PSF"
updated: "2026-10-01"
---

# GetSetDescriptorType

The type of objects defined in extension modules with `PyGetSetDef`, such
as `FrameType.f_locals` or `array.array.typecode`.
This type is used as
descriptor for object attributes; it has the same purpose as the
`property` type, but for classes defined in extension modules.
