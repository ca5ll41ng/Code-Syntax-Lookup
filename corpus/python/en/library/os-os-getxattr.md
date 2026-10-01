---
id: "python-en-function-os-getxattr"
language: "python"
lang: "en"
category: "function"
name: "getxattr"
signature: "getxattr(path, attribute, *, follow_symlinks=True)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.getxattr"
license: "PSF"
updated: "2026-10-01"
---

# getxattr

Return the value of the extended filesystem attribute *attribute* for
*path*. *attribute* can be bytes or str (directly or indirectly through the
`PathLike` interface). If it is str, it is encoded with the filesystem
encoding.

This function can support `specifying a file descriptor` and
`not following symlinks`.

audit-event:: os.getxattr path,attribute os.getxattr

> *Changed in 3.6*: Accepts a :term:`path-like object` for *path* and *attribute*.
