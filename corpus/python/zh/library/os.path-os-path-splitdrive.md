---
id: "python-zh-function-os-path-splitdrive"
language: "python"
lang: "zh"
category: "function"
name: "splitdrive"
signature: "splitdrive(path, /)"
directive: "function"
module: "os.path"
source_url: "https://docs.python.org/zh-cn/3/library/os.path.html#os.path.splitdrive"
license: "PSF"
updated: "2026-10-01"
---

# splitdrive

Split the pathname *path* into a pair `(drive, tail)` where *drive* is either
a mount point or the empty string.  On systems which do not use drive
specifications, *drive* will always be the empty string.  In all cases, `drive
+ tail` will be the same as *path*.

在 Windows 上，本方法将路径拆分为驱动器/UNC 根节点和相对路径。

If the path contains a drive letter, drive will contain everything
up to and including the colon::

   >>> splitdrive("c:/dir")
   ("c:", "/dir")

If the path contains a UNC path, drive will contain the host name
and share::

   >>> splitdrive("//host/computer/dir")
   ("//host/computer", "/dir")

> *Changed in 3.6*: Accepts a :term:`path-like object`.
