---
id: "python-en-function-collections-abc-iterable"
language: "python"
lang: "en"
category: "function"
name: "Iterable"
directive: "class"
module: "collections.abc"
source_url: "https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterable"
license: "PSF"
updated: "2026-10-01"
---

# Iterable

ABC for classes that provide the `~container.__iter__` method.

Checking `isinstance(obj, Iterable)` detects classes that are registered
as `Iterable` or that have an `~container.__iter__` method,
but it does
not detect classes that iterate with the `~object.__getitem__` method.
The only reliable way to determine whether an object is `iterable`
is to call `iter(obj)`.
