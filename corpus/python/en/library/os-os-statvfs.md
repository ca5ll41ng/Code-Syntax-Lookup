---
id: "python-en-function-os-statvfs"
language: "python"
lang: "en"
category: "function"
name: "statvfs"
signature: "statvfs(path)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.statvfs"
license: "PSF"
updated: "2026-10-01"
---

# statvfs

Perform a `statvfs(3)` system call on the given path.  The return value
is a `statvfs_result` whose attributes describe the filesystem
on the given path and correspond to the members of the :c`statvfs`
structure.

This function can support `specifying a file descriptor`.

availability:: Unix.

> *Changed in 3.3*: Added support for specifying *path* as an open file descriptor.

> *Changed in 3.6*: Accepts a :term:`path-like object`.
