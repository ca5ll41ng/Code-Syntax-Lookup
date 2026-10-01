---
id: "python-en-function-collections-abc-bytestring"
language: "python"
lang: "en"
category: "function"
name: "ByteString"
directive: "class"
module: "collections.abc"
source_url: "https://docs.python.org/3/library/collections.abc.html#collections.abc.ByteString"
license: "PSF"
updated: "2026-10-01"
---

# ByteString

ABCs for read-only and mutable `sequences`.

Implementation note: Some of the mixin methods, such as
`~container.__iter__`, `~object.__reversed__`,
and `~sequence.index` make repeated calls to the underlying
`~object.__getitem__` method.
Consequently, if `~object.__getitem__` is implemented with constant
access speed, the mixin methods will have linear performance;
however, if the underlying method is linear (as it would be with a
linked list), the mixins will have quadratic performance and will
likely need to be overridden.

method:: index(value, start=0, stop=None)

deprecated-removed:: 3.12 3.17
