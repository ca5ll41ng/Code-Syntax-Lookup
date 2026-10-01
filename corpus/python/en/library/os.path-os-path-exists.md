---
id: "python-en-function-os-path-exists"
language: "python"
lang: "en"
category: "function"
name: "exists"
signature: "exists(path)"
directive: "function"
module: "os.path"
source_url: "https://docs.python.org/3/library/os.path.html#os.path.exists"
license: "PSF"
updated: "2026-10-01"
---

# exists

Return `True` if *path* refers to an existing path or an open
file descriptor.  Returns `False` for broken symbolic links.  On
some platforms, this function may return `False` if permission is
not granted to execute `os.stat` on the requested file, even
if the *path* physically exists.

> *Changed in 3.3*: *path* can now be an integer: ``True`` is returned if it is an  open file descriptor, ``False`` otherwise.

> *Changed in 3.6*: Accepts a :term:`path-like object`.
