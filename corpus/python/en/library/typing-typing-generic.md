---
id: "python-en-function-typing-generic"
language: "python"
lang: "en"
category: "function"
name: "Generic"
directive: "class"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.Generic"
license: "PSF"
updated: "2026-10-01"
---

# Generic

Abstract base class for generic types.

A generic type is typically declared by adding a list of type parameters
after the class name::

   class Mapping[KT, VT]:
       def __getitem__(self, key: KT) -> VT:
           ...
           # Etc.

Such a class implicitly inherits from `Generic`.
The runtime semantics of this syntax are discussed in the
`Language Reference`.

This class can then be used as follows::

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
