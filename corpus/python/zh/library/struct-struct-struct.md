---
id: "python-zh-function-struct-struct"
language: "python"
lang: "zh"
category: "function"
name: "Struct"
signature: "Struct(format)"
directive: "class"
module: "struct"
source_url: "https://docs.python.org/zh-cn/3/library/struct.html#struct.Struct"
license: "PSF"
updated: "2026-10-01"
---

# Struct

Return a new Struct object which writes and reads binary data according to
the format string *format*.  Creating a `Struct` object once and calling its
methods is more efficient than calling module-level functions with the
same format since the format string is only compiled once.

> **Note**
>
> The compiled versions of the most recent format strings passed to
> the module-level functions are cached, so programs that use only a few
> format strings needn't worry about reusing a single `Struct`
> instance.
>

已编译的 Struct 对象支持以下方法和属性：

method:: pack(v1, v2, ...)

method:: pack_into(buffer, offset, v1, v2, ...)

method:: unpack(buffer)

method:: unpack_from(buffer, offset=0)

method:: iter_unpack(buffer)

attribute:: format

attribute:: size

> *Changed in 3.13 The *repr()* of structs has changed.  It*: is now:     >>> Struct('i')    Struct('i')
