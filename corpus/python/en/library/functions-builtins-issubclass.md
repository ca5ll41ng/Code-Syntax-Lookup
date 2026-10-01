---
id: "python-en-function-builtins-issubclass"
language: "python"
lang: "en"
category: "function"
name: "issubclass"
signature: "issubclass(cls, classinfo, /)"
directive: "function"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#issubclass"
license: "PSF"
updated: "2026-10-01"
---

# issubclass

Return `True` if *cls* is a subclass (direct, indirect, or `virtual`) of *classinfo*.  A
class is considered a subclass of itself. *classinfo* may be a tuple of class
objects (or recursively, other such tuples)
or a `types-union`, in which case return `True` if *cls* is a
subclass of any entry in *classinfo*.  In any other case, a `TypeError`
exception is raised.

> *Changed in 3.10*: *classinfo* can be a :ref:`types-union`.
