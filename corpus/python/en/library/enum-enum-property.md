---
id: "python-en-function-enum-property"
language: "python"
lang: "en"
category: "function"
name: "property"
directive: "decorator"
module: "enum"
source_url: "https://docs.python.org/3/library/enum.html#enum.property"
license: "PSF"
updated: "2026-10-01"
---

# property

A decorator similar to the built-in `property`, but specifically for
enumerations.  It allows member attributes to have the same names as members
themselves.

> **Note**
>
> for example, the *value* and *name* attributes are defined in the
> *Enum* class, and *Enum* subclasses can define members with the
> names `value` and `name`.
>

> *Added in 3.11*
