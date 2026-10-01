---
id: "python-en-function-tarfile-tarfile-list"
language: "python"
lang: "en"
category: "function"
name: "TarFile.list"
signature: "TarFile.list(verbose=True, *, members=None)"
directive: "method"
module: "tarfile"
source_url: "https://docs.python.org/3/library/tarfile.html#tarfile.TarFile.list"
license: "PSF"
updated: "2026-10-01"
---

# TarFile.list

Print a table of contents to `sys.stdout`. If *verbose* is `False`,
only the names of the members are printed. If it is `True`, output
similar to that of `ls -l` is produced. If optional *members* is
given, it must be a subset of the list returned by `getmembers`.

> *Changed in 3.5*: Added the *members* parameter.
