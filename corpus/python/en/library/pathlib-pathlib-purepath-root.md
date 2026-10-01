---
id: "python-en-function-pathlib-purepath-root"
language: "python"
lang: "en"
category: "function"
name: "PurePath.root"
directive: "attribute"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.PurePath.root"
license: "PSF"
updated: "2026-10-01"
---

# PurePath.root

A string representing the (local or global) root, if any::

   >>> PureWindowsPath('c:/Program Files/').root
   '\\'
   >>> PureWindowsPath('c:Program Files/').root
   ''
   >>> PurePosixPath('/etc').root
   '/'

UNC shares always have a root::

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
