---
id: "python-en-function-tarfile-tarfile-add"
language: "python"
lang: "en"
category: "function"
name: "TarFile.add"
signature: "TarFile.add(name, arcname=None, recursive=True, *, filter=None)"
directive: "method"
module: "tarfile"
source_url: "https://docs.python.org/3/library/tarfile.html#tarfile.TarFile.add"
license: "PSF"
updated: "2026-10-01"
---

# TarFile.add

Add the file *name* to the archive. *name* may be any type of file
(directory, fifo, symbolic link, etc.). If given, *arcname* specifies an
alternative name for the file in the archive. Directories are added
recursively by default. This can be avoided by setting *recursive* to
`False`. Recursion adds entries in sorted order.
If *filter* is given, it
should be a function that takes a `TarInfo` object argument and
returns the changed `TarInfo` object. If it instead returns
`None` the `TarInfo` object will be excluded from the
archive. See `tar-examples` for an example.

> *Changed in 3.2*: Added the *filter* parameter.

> *Changed in 3.7*: Recursion adds entries in sorted order.
