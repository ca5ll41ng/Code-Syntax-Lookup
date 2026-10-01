---
id: "python-en-function-inspect-getattr_static"
language: "python"
lang: "en"
category: "function"
name: "getattr_static"
signature: "getattr_static(obj, attr)"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/3/library/inspect.html#inspect.getattr_static"
license: "PSF"
updated: "2026-10-01"
---

# getattr_static

Retrieve attributes without triggering dynamic lookup via the
descriptor protocol, `~object.__getattr__`
or `~object.__getattribute__`.

Note: this function may not be able to retrieve all attributes
that getattr can fetch (like dynamically created attributes)
and may find attributes that getattr can't (like descriptors
that raise AttributeError). It can also return descriptors objects
instead of instance members.

If the instance `~object.__dict__` is shadowed by another member (for
example a property) then this function will be unable to find instance
members.

> *Added in 3.2*
