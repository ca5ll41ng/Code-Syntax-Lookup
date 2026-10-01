---
id: "python-en-function-inspect-getmembers_static"
language: "python"
lang: "en"
category: "function"
name: "getmembers_static"
signature: "getmembers_static(object[, predicate])"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/3/library/inspect.html#inspect.getmembers_static"
license: "PSF"
updated: "2026-10-01"
---

# getmembers_static

Return all the members of an object in a list of `(name, value)`
pairs sorted by name without triggering dynamic lookup via the descriptor
protocol, __getattr__ or __getattribute__. Optionally, only return members
that satisfy a given predicate.

> **Note**
>
> `getmembers_static` may not be able to retrieve all members
> that getmembers can fetch (like dynamically created attributes)
> and may find members that getmembers can't (like descriptors
> that raise AttributeError). It can also return descriptor objects
> instead of instance members in some cases.
>

> *Added in 3.11*
