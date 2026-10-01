---
id: "python-zh-function-multiprocessing-rawvalue"
language: "python"
lang: "zh"
category: "function"
name: "RawValue"
signature: "RawValue(typecode_or_type, *args)"
directive: "function"
module: "multiprocessing"
source_url: "https://docs.python.org/zh-cn/3/library/multiprocessing.html#multiprocessing.RawValue"
license: "PSF"
updated: "2026-10-01"
---

# RawValue

从共享内存中申请并返回一个 ctypes 对象。

*typecode_or_type* determines the type of the returned object: it is either a
ctypes type or a one character typecode of the kind used by the `array`
module.  *\*args* is passed on to the constructor for the type.

Note that setting and getting the value is potentially non-atomic -- use
`Value` instead to make sure that access is automatically synchronized
using a lock.

Note that an array of `ctypes.c_char` has `value` and `raw`
attributes which allow one to use it to store and retrieve strings -- see
documentation for `ctypes`.
