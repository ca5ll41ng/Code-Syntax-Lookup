---
id: "python-zh-function-array-array"
language: "python"
lang: "zh"
category: "function"
name: "array"
signature: "array(typecode[, initializer])"
directive: "class"
module: "array"
source_url: "https://docs.python.org/zh-cn/3/library/array.html#array.array"
license: "PSF"
updated: "2026-10-01"
---

# array

A new array whose items are restricted by *typecode*, and initialized
from the optional *initializer* value, which must be a `bytes`
or `bytearray` object, a Unicode string, or iterable over elements
of the appropriate type.

If given a `bytes` or `bytearray` object, the initializer
is passed to the new array's `frombytes` method;
if given a Unicode string, the initializer is passed to the
`fromunicode` method;
otherwise, the initializer's iterator is passed to the `extend` method
to add initial items to the array.

Array objects support the ordinary `mutable` `sequence` operations of indexing, slicing,
concatenation, and multiplication.  When using slice assignment, the assigned
value must be an array object with the same type code; in all other cases,
`TypeError` is raised. Array objects also implement the buffer interface,
and may be used wherever `bytes-like objects` are supported.

Array 是对应其内容类型的 :ref:`泛型 <generics>` 对象。

audit-event:: array.__new__ typecode,initializer array.array

attribute:: typecode

attribute:: itemsize

method:: append(value, /)

method:: buffer_info()

method:: byteswap()

method:: count(value, /)

method:: extend(iterable, /)

method:: frombytes(buffer, /)

method:: fromfile(f, n, /)

method:: fromlist(list, /)

method:: fromunicode(ustr, /)

method:: index(value[, start[, stop]])

method:: insert(index, value, /)

method:: pop(index=-1, /)

method:: remove(value, /)

method:: clear()

method:: reverse()

method:: tobytes()

method:: tofile(f, /)

method:: tolist()

method:: tounicode()
