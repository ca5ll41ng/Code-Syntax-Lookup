---
id: "python-zh-function-collections-abc-iterable"
language: "python"
lang: "zh"
category: "function"
name: "Iterable"
directive: "class"
module: "collections.abc"
source_url: "https://docs.python.org/zh-cn/3/library/collections.abc.html#collections.abc.Iterable"
license: "PSF"
updated: "2026-10-01"
---

# Iterable

用于提供 :meth:`~container.__iter__` 方法的类的 ABC

Checking `isinstance(obj, Iterable)` detects classes that are registered
as `Iterable` or that have an `~container.__iter__` method,
but it does
not detect classes that iterate with the `~object.__getitem__` method.
The only reliable way to determine whether an object is `iterable`
is to call `iter(obj)`.
