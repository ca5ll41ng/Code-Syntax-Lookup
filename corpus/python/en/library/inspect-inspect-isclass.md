---
id: "python-en-function-inspect-isclass"
language: "python"
lang: "en"
category: "function"
name: "isclass"
signature: "isclass(object)"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/3/library/inspect.html#inspect.isclass"
license: "PSF"
updated: "2026-10-01"
---

# isclass

Return `True` if the object is a class, whether built-in or created in Python
code.

This function returns `False` for `generic aliases` of classes,
such as `list[int]`.
