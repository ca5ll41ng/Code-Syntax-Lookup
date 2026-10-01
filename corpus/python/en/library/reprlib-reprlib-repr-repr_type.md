---
id: "python-en-function-reprlib-repr-repr_type"
language: "python"
lang: "en"
category: "function"
name: "Repr.repr_TYPE"
signature: "Repr.repr_TYPE(obj, level)"
directive: "method"
module: "reprlib"
source_url: "https://docs.python.org/3/library/reprlib.html#reprlib.Repr.repr_TYPE"
license: "PSF"
updated: "2026-10-01"
---

# Repr.repr_TYPE

Formatting methods for specific types are implemented as methods with a name
based on the type name.  In the method name, **TYPE** is replaced by
`'_'.join(type(obj).__name__.split())`. Dispatch to these methods is
handled by `repr1`. Type-specific methods which need to recursively
format a value should call `self.repr1(subobj, level - 1)`.
