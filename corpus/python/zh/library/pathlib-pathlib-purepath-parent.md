---
id: "python-zh-function-pathlib-purepath-parent"
language: "python"
lang: "zh"
category: "function"
name: "PurePath.parent"
directive: "attribute"
module: "pathlib"
source_url: "https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.PurePath.parent"
license: "PSF"
updated: "2026-10-01"
---

# PurePath.parent

此路径的逻辑父路径::

   >>> p = PurePosixPath('/a/b/c/d')
   >>> p.parent
   PurePosixPath('/a/b/c')

你不能超过一个 anchor 或空路径::

   >>> p = PurePosixPath('/')
   >>> p.parent
   PurePosixPath('/')
   >>> p = PurePosixPath('.')
   >>> p.parent
   PurePosixPath('.')

> **Note**
>
> 这是一个单纯的词法操作，因此有以下行为::
>
>    >>> p = PurePosixPath('foo/..')
>    >>> p.parent
>    PurePosixPath('foo')
>
> If you want to walk an arbitrary filesystem path upwards, it is
> recommended to first call `Path.resolve` so as to resolve
> symlinks and eliminate `".."` components.
>
