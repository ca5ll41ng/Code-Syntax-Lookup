---
id: "python-zh-function-pathlib-purepath-full_match"
language: "python"
lang: "zh"
category: "function"
name: "PurePath.full_match"
signature: "PurePath.full_match(pattern, *, case_sensitive=None)"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.PurePath.full_match"
license: "PSF"
updated: "2026-10-01"
---

# PurePath.full_match

Match this path against the provided glob-style pattern.  Return `True`
if matching is successful, `False` otherwise.  For example::

   >>> PurePath('a/b.py').full_match('a/*.py')
   True
   >>> PurePath('a/b.py').full_match('*.py')
   False
   >>> PurePath('/a/b/c.py').full_match('/a/**')
   True
   >>> PurePath('/a/b/c.py').full_match('**/*.py')
   True

> **Seealso**
>
> :ref:`pathlib-pattern-language` 文档。
>

与其他方法一样，是否大小写敏感遵循平台的默认规则::

   >>> PurePosixPath('b.py').full_match('*.PY')
   False
   >>> PureWindowsPath('b.py').full_match('*.PY')
   True

将 *case_sensitive* 设为 ``True`` 或 ``False`` 来覆盖此行为。

> *Added in 3.13*
