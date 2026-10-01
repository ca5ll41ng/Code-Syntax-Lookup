---
id: "python-zh-function-pathlib-path-rglob"
language: "python"
lang: "zh"
category: "function"
name: "Path.rglob"
signature: "Path.rglob(pattern, *, case_sensitive=None, recurse_symlinks=False)"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.Path.rglob"
license: "PSF"
updated: "2026-10-01"
---

# Path.rglob

Glob the given relative *pattern* recursively.  This is like calling
`Path.glob` with "`**/`" added in front of the *pattern*.

> **Note**
>
> The paths are returned in no particular order.
> If you need a specific order, sort the results.
>

> **Note**
>
> Any `OSError` exceptions raised from scanning the filesystem are
> suppressed. This includes `PermissionError` when accessing
> directories without read permission.
>

> **Seealso**
>
> :ref:`pathlib-pattern-language` 和 :meth:`Path.glob` 文档。
>

audit-event:: pathlib.Path.rglob self,pattern pathlib.Path.rglob

> *Changed in 3.12*: The *case_sensitive* parameter was added.

> *Changed in 3.13*: The *recurse_symlinks* parameter was added.

> *Changed in 3.13*: The *pattern* parameter accepts a :term:`path-like object`.
