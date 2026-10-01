---
id: "python-en-function-builtins-id"
language: "python"
lang: "en"
category: "function"
name: "id"
signature: "id(object, /)"
directive: "function"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#id"
license: "PSF"
updated: "2026-10-01"
---

# id

Return the "identity" of an object.  This is an integer which
is guaranteed to be unique and constant for this object during its lifetime.
Two objects with non-overlapping lifetimes may have the same `id`
value.

impl-detail:: This is the address of the object in memory.

audit-event:: builtins.id id id
