---
id: "python-en-function-reprlib-repr-repr1"
language: "python"
lang: "en"
category: "function"
name: "Repr.repr1"
signature: "Repr.repr1(obj, level)"
directive: "method"
module: "reprlib"
source_url: "https://docs.python.org/3/library/reprlib.html#reprlib.Repr.repr1"
license: "PSF"
updated: "2026-10-01"
---

# Repr.repr1

Recursive implementation used by `.repr`.  This uses the type of *obj* to
determine which formatting method to call, passing it *obj* and *level*.  The
type-specific methods should call `repr1` to perform recursive formatting,
with `level - 1` for the value of *level* in the recursive  call.
