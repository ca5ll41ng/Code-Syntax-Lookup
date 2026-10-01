---
id: "python-en-function-builtins-genericalias-__args__"
language: "python"
lang: "en"
category: "function"
name: "genericalias.__args__"
directive: "attribute"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#genericalias.__args__"
license: "PSF"
updated: "2026-10-01"
---

# genericalias.__args__

This attribute is a `tuple` (possibly of length 1) of generic
types passed to the original `~object.__class_getitem__` of the
generic class::

   >>> dict[str, list[int]].__args__
   (<class 'str'>, list[int])
