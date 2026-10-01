---
id: "python-en-function-builtins-genericalias-__parameters__"
language: "python"
lang: "en"
category: "function"
name: "genericalias.__parameters__"
directive: "attribute"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#genericalias.__parameters__"
license: "PSF"
updated: "2026-10-01"
---

# genericalias.__parameters__

This attribute is a lazily computed tuple (possibly empty) of unique type
variables found in `__args__`::

   >>> from typing import TypeVar

   >>> T = TypeVar('T')
   >>> list[T].__parameters__
   (~T,)

> **Note**
>
> A `GenericAlias` object with `typing.ParamSpec` parameters may not
> have correct `__parameters__` after substitution because
> `typing.ParamSpec` is intended primarily for static type checking.
>
