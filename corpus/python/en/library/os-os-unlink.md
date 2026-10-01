---
id: "python-en-function-os-unlink"
language: "python"
lang: "en"
category: "function"
name: "unlink"
signature: "unlink(path, *, dir_fd=None)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.unlink"
license: "PSF"
updated: "2026-10-01"
---

# unlink

Remove (delete) the file *path*.  This function is semantically
identical to `remove`; the `unlink` name is its
traditional Unix name.  Please see the documentation for
`remove` for further information.

audit-event:: os.remove path,dir_fd os.unlink

> *Changed in 3.3*: Added the *dir_fd* parameter.

> *Changed in 3.6*: Accepts a :term:`path-like object`.
