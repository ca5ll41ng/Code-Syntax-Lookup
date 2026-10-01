---
id: "python-zh-function-multiprocessing-rawarray"
language: "python"
lang: "zh"
category: "function"
name: "RawArray"
signature: "RawArray(typecode_or_type, size_or_initializer)"
directive: "function"
module: "multiprocessing"
source_url: "https://docs.python.org/zh-cn/3/library/multiprocessing.html#multiprocessing.RawArray"
license: "PSF"
updated: "2026-10-01"
---

# RawArray

从共享内存中申请并返回一个 ctypes 数组。

*typecode_or_type* determines the type of the elements of the returned array:
it is either a ctypes type or a one character typecode of the kind used by
the `array` module.  If *size_or_initializer* is an integer then it
determines the length of the array, and the array will be initially zeroed.
Otherwise *size_or_initializer* is a sequence which is used to initialize the
array and whose length determines the length of the array.

Note that setting and getting an element is potentially non-atomic -- use
`Array` instead to make sure that access is automatically synchronized
using a lock.
