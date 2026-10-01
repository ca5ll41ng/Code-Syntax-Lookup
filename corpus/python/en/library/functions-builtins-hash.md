---
id: "python-en-function-builtins-hash"
language: "python"
lang: "en"
category: "function"
name: "hash"
signature: "hash(object, /)"
directive: "function"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#hash"
license: "PSF"
updated: "2026-10-01"
---

# hash

Return the hash value of the object (if it has one).  Hash values are
integers.  They are used to quickly compare dictionary keys during a
dictionary lookup.  Numeric values that compare equal have the same hash
value (even if they are of different types, as is the case for 1 and 1.0).

> **Note**
>
> For objects with custom `~object.__hash__` methods,
> note that `hash`
> truncates the return value based on the bit width of the host machine.
>
