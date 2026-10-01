---
id: "python-en-function-os-listxattr"
language: "python"
lang: "en"
category: "function"
name: "listxattr"
signature: "listxattr(path=None, *, follow_symlinks=True)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.listxattr"
license: "PSF"
updated: "2026-10-01"
---

# listxattr

Return a list of the extended filesystem attributes on *path*.  The
attributes in the list are represented as strings decoded with the filesystem
encoding.  If *path* is `None`, `listxattr` will examine the current
directory.

This function can support `specifying a file descriptor` and
`not following symlinks`.

audit-event:: os.listxattr path os.listxattr

> *Changed in 3.6*: Accepts a :term:`path-like object`.

> *Changed in 3.15*: ``os.listxattr(-1)`` now fails with ``OSError(errno.EBADF)`` rather than listing extended attributes of the current directory.
