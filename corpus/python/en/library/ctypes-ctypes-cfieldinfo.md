---
id: "python-en-function-ctypes-cfieldinfo"
language: "python"
lang: "en"
category: "function"
name: "CFieldInfo"
signature: "CFieldInfo(anonymous=False, bit_width=None)"
directive: "class"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes.CFieldInfo"
license: "PSF"
updated: "2026-10-01"
---

# CFieldInfo

Information regarding a structure field defined by the `struct`
decorator. This should be used in the second argument of a
`typing.Annotated` wrapping a ctypes type.

*anonymous* specifies whether the field will be present in the
`~ctypes.Structure._anonymous_` attribute of the generated class.

If *bit_width* is non-`None`, the annotated field will be *bit_width*
number of bits in the generated structure. This is equivalent to passing
a third item in `~ctypes.Structure._fields_`.

> *Added in next*
