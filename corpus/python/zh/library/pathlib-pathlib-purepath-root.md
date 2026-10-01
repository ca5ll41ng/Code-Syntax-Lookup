---
id: "python-zh-function-pathlib-purepath-root"
language: "python"
lang: "zh"
category: "function"
name: "PurePath.root"
directive: "attribute"
module: "pathlib"
source_url: "https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.PurePath.root"
license: "PSF"
updated: "2026-10-01"
---

# PurePath.root

一个表示（本地或全局）根的字符串，如果存在::

   >>> PureWindowsPath('c:/Program Files/').root
   '\\'
   >>> PureWindowsPath('c:Program Files/').root
   ''
   >>> PurePosixPath('/etc').root
   '/'

UNC 分享一样拥有根::

   >>> PureWindowsPath('//host/share').root
   '\\'

If the path starts with more than two successive slashes,
`~pathlib.PurePosixPath` collapses them::

   >>> PurePosixPath('//etc').root
   '//'
   >>> PurePosixPath('///etc').root
   '/'
   >>> PurePosixPath('////etc').root
   '/'

> **Note**
>
> This behavior conforms to *The Open Group Base Specifications Issue 6*,
> paragraph `4.11 Pathname Resolution
> <https://pubs.opengroup.org/onlinepubs/009695399/basedefs/xbd_chap04.html#tag_04_11>`_:
>
> *"A pathname that begins with two successive slashes may be interpreted in
> an implementation-defined manner, although more than two leading slashes
> shall be treated as a single slash."*
>
