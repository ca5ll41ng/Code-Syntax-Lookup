---
id: "python-en-function-os-path-splitdrive"
language: "python"
lang: "en"
category: "function"
name: "splitdrive"
signature: "splitdrive(path, /)"
directive: "function"
module: "os.path"
source_url: "https://docs.python.org/3/library/os.path.html#os.path.splitdrive"
license: "PSF"
updated: "2026-10-01"
---

# splitdrive

Split the pathname *path* into a pair `(drive, tail)` where *drive* is either
a mount point or the empty string.  On systems which do not use drive
specifications, *drive* will always be the empty string.  In all cases, `drive
+ tail` will be the same as *path*.

On Windows, splits a pathname into drive/UNC sharepoint and relative path.

If the path contains a drive letter, drive will contain everything
up to and including the colon::

   >>> splitdrive("c:/dir")
   ("c:", "/dir")

If the path contains a UNC path, drive will contain the host name
and share::

   >>> splitdrive("//host/computer/dir")
   ("//host/computer", "/dir")

> *Changed in 3.6*: Accepts a :term:`path-like object`.
