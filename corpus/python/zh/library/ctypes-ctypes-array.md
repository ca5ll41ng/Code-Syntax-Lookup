---
id: "python-zh-function-ctypes-array"
language: "python"
lang: "zh"
category: "function"
name: "Array"
signature: "Array(*args)"
directive: "class"
module: "ctypes"
source_url: "https://docs.python.org/zh-cn/3/library/ctypes.html#ctypes.Array"
license: "PSF"
updated: "2026-10-01"
---

# Array

数组的抽象基类。

The recommended way to create concrete array types is by multiplying any
`ctypes` data type with a non-negative integer.  Alternatively, you can subclass
this type and define `_length_` and `_type_` class variables.
Array elements can be read and written using standard
subscript and slice accesses; for slice reads, the resulting object is
*not* itself an `Array`.

Array 是对应其元素类型的 :ref:`泛型 <generics>` 对象。

attribute:: _length_

attribute:: _type_

Array subclass constructors accept positional arguments, used to
initialize the elements in order.
