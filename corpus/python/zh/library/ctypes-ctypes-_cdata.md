---
id: "python-zh-function-ctypes-_cdata"
language: "python"
lang: "zh"
category: "function"
name: "_CData"
directive: "class"
module: "ctypes"
source_url: "https://docs.python.org/zh-cn/3/library/ctypes.html#ctypes._CData"
license: "PSF"
updated: "2026-10-01"
---

# _CData

This non-public class is the common base class of all ctypes data types.
Among other things, all ctypes type instances contain a memory block that
hold C compatible data; the address of the memory block is returned by the
`addressof` helper function. Another instance variable is exposed as
`_objects`; this contains other Python objects that need to be kept
alive in case the memory block contains pointers.

Common methods of ctypes data types, these are all class methods (to be
exact, they are methods of the `metaclass`):

method:: _CData.from_buffer(source[, offset])

method:: _CData.from_buffer_copy(source[, offset])

method:: from_address(address)

method:: from_param(obj)

method:: in_dll(library, name)

ctypes 数据类型的常见类变量：

attribute:: __pointer_type__

ctypes 数据类型的常见实例变量:

attribute:: _b_base_

attribute:: _b_needsfree_

attribute:: _objects
