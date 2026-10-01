---
id: "python-zh-function-pathlib-path-glob"
language: "python"
lang: "zh"
category: "function"
name: "Path.glob"
signature: "Path.glob(pattern, *, case_sensitive=None, recurse_symlinks=False)"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.Path.glob"
license: "PSF"
updated: "2026-10-01"
---

# Path.glob

Glob the given relative *pattern* in the directory represented by this path,
yielding all matching files (of any kind)::

   >>> sorted(Path('.').glob('*.py'))
   [PosixPath('pathlib.py'), PosixPath('setup.py'), PosixPath('test_pathlib.py')]
   >>> sorted(Path('.').glob('*/*.py'))
   [PosixPath('docs/conf.py')]
   >>> sorted(Path('.').glob('**/*.py'))
   [PosixPath('build/lib/pathlib.py'),
    PosixPath('docs/conf.py'),
    PosixPath('pathlib.py'),
    PosixPath('setup.py'),
    PosixPath('test_pathlib.py')]

> **Note**
>
> The paths are returned in no particular order.
> If you need a specific order, sort the results.
>

> **Seealso**
>
> :ref:`pathlib-pattern-language` 文档。
>

By default, or when the *case_sensitive* keyword-only argument is set to
`None`, this method matches paths using platform-specific casing rules:
typically, case-sensitive on POSIX, and case-insensitive on Windows.
Set *case_sensitive* to `True` or `False` to override this behaviour.

By default, or when the *recurse_symlinks* keyword-only argument is set to
`False`, this method follows symlinks except when expanding "`**`"
wildcards. Set *recurse_symlinks* to `True` to always follow symlinks.

> **Note**
>
> Any `OSError` exceptions raised from scanning the filesystem are
> suppressed. This includes `PermissionError` when accessing
> directories without read permission.
>

audit-event:: pathlib.Path.glob self,pattern pathlib.Path.glob

> *Changed in 3.12*: The *case_sensitive* parameter was added.

> *Changed in 3.13*: The *recurse_symlinks* parameter was added.

> *Changed in 3.13*: The *pattern* parameter accepts a :term:`path-like object`.

> *Changed in 3.13*: Any :exc:`OSError` exceptions raised from scanning the filesystem are suppressed. In previous versions, such exceptions are suppressed in many cases, but not all.
