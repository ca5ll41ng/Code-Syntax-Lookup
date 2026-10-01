---
id: "python-en-function-zipfile-zipfile-extractall"
language: "python"
lang: "en"
category: "function"
name: "ZipFile.extractall"
signature: "ZipFile.extractall(path=None, members=None, pwd=None)"
directive: "method"
module: "zipfile"
source_url: "https://docs.python.org/3/library/zipfile.html#zipfile.ZipFile.extractall"
license: "PSF"
updated: "2026-10-01"
---

# ZipFile.extractall

Extract all members from the archive to the current working directory.  *path*
specifies a different directory to extract to.  *members* is optional and must
be a subset of the list returned by `namelist`.  *pwd* is the password
used for encrypted files as a `bytes` object.

> **Warning**
>
> Never extract archives from untrusted sources without prior inspection.
> It is possible that files are created outside of *path*, for example, members
> that have absolute filenames or filenames with ".." components.
> This module attempts to prevent that.
> See `extract` note.
>

> *Changed in 3.6*: Calling :meth:`extractall` on a closed ZipFile will raise a :exc:`ValueError`.  Previously, a :exc:`RuntimeError` was raised.

> *Changed in 3.6.2*: The *path* parameter accepts a :term:`path-like object`.
