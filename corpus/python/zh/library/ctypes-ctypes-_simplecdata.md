---
id: "python-zh-function-ctypes-_simplecdata"
language: "python"
lang: "zh"
category: "function"
name: "_SimpleCData"
directive: "class"
module: "ctypes"
source_url: "https://docs.python.org/zh-cn/3/library/ctypes.html#ctypes._SimpleCData"
license: "PSF"
updated: "2026-10-01"
---

# _SimpleCData

This non-public class is the base class of all fundamental ctypes data
types. It is mentioned here because it contains the common attributes of the
fundamental ctypes data types.  `_SimpleCData` is a subclass of
`_CData`, so it inherits their methods and attributes. ctypes data
types that are not and do not contain pointers can now be pickled.

实例拥有一个属性:

attribute:: value

每个子类都有一个类属性：

attribute:: _type_
