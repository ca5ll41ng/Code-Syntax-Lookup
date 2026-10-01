---
id: "python-en-function-ctypes-struct"
language: "python"
lang: "en"
category: "function"
name: "struct"
signature: "struct(*, align=None, layout=None, endian='native', pack=None)"
directive: "decorator"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes.struct"
license: "PSF"
updated: "2026-10-01"
---

# struct

A `decorator` that allows generating structure types using an
annotation-based syntax, similar to the `dataclasses` module.

For example:

```python

from ctypes.util import struct
from ctypes import c_int

@struct
class Point:
    x: c_int
    y: c_int

point = Point(1, 2)
```

*align*, *layout*, and *pack* supply the value for the `~ctypes.Structure._align_`,
`~ctypes.Structure._layout_`, and `~ctypes.Structure._pack_`
attributes, respectively.

*endian* controls which structure class will be used as the base.

- If *endian* is `'native'`, `~ctypes.Structure` will be used.
- If *endian* is `'big'`, `~ctypes.BigEndianStructure` will be used.
- If *endian* is `'little'`, `~ctypes.LittleEndianStructure` will be used.

Any other value will raise a `ValueError`.

For controlling field-specific data, wrap the annotation in `typing.Annotated`
with `CFieldInfo` as the second argument, like so:

```python

from typing import Annotated
from ctypes import c_ssize_t, c_void_p
from ctypes.util import struct, CFieldInfo

@struct
class PyObject:
    ob_refcnt: c_ssize_t
    ob_type: c_void_p

@struct
class PyHovercraftObject:
    ob_base: Annotated[PyObject, CFieldInfo(anonymous=True)]
```

> *Added in next*
