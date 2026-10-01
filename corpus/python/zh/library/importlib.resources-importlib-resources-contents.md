---
id: "python-zh-function-importlib-resources-contents"
language: "python"
lang: "zh"
category: "function"
name: "contents"
signature: "contents(anchor, *path_names)"
directive: "function"
module: "importlib.resources"
source_url: "https://docs.python.org/zh-cn/3/library/importlib.resources.html#importlib.resources.contents"
license: "PSF"
updated: "2026-10-01"
---

# contents

Return an iterable over the named items within the package or path.
The iterable returns names of resources (e.g. files) and non-resources
(e.g. directories) as `str`.
The iterable does not recurse into subdirectories.

See `the introduction` for
details on *anchor* and *path_names*.

此函数大致等价于::

    for resource in files(anchor).joinpath(*path_names).iterdir():
        yield resource.name

> *Deprecated since 3.11*: Prefer ``iterdir()`` as above, which offers more control over the results and richer functionality.
