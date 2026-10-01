---
id: "python-zh-function-importlib-resources-is_resource"
language: "python"
lang: "zh"
category: "function"
name: "is_resource"
signature: "is_resource(anchor, *path_names)"
directive: "function"
module: "importlib.resources"
source_url: "https://docs.python.org/zh-cn/3/library/importlib.resources.html#importlib.resources.is_resource"
license: "PSF"
updated: "2026-10-01"
---

# is_resource

Return `True` if the named resource exists, otherwise `False`.
This function does not consider directories to be resources.

See `the introduction` for
details on *anchor* and *path_names*.

此函数大致等价于::

      files(anchor).joinpath(*path_names).is_file()

> *Changed in 3.13*: Multiple *path_names* are accepted.
