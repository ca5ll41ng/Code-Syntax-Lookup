---
id: "python-zh-function-typing-generic"
language: "python"
lang: "zh"
category: "function"
name: "Generic"
directive: "class"
module: "typing"
source_url: "https://docs.python.org/zh-cn/3/library/typing.html#typing.Generic"
license: "PSF"
updated: "2026-10-01"
---

# Generic

用于泛型类型的抽象基类。

A generic type is typically declared by adding a list of type parameters
after the class name::

   class Mapping[KT, VT]:
       def __getitem__(self, key: KT) -> VT:
           ...
           # Etc.

Such a class implicitly inherits from `Generic`.
The runtime semantics of this syntax are discussed in the
`Language Reference`.

该类的用法如下：

   def lookup_name[X, Y](mapping: Mapping[X, Y], key: X, default: Y) -> Y:
       try:
           return mapping[key]
       except KeyError:
           return default

Here the brackets after the function name indicate a
`generic function`.

For backwards compatibility, generic classes can also be
declared by explicitly inheriting from
`Generic`. In this case, the type parameters must be declared
separately::

   KT = TypeVar('KT')
   VT = TypeVar('VT')

   class Mapping(Generic[KT, VT]):
       def __getitem__(self, key: KT) -> VT:
           ...
           # Etc.
