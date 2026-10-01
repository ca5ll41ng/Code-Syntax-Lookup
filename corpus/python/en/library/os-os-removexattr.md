---
id: "python-en-function-os-removexattr"
language: "python"
lang: "en"
category: "function"
name: "removexattr"
signature: "removexattr(path, attribute, *, follow_symlinks=True)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.removexattr"
license: "PSF"
updated: "2026-10-01"
---

# removexattr

Removes the extended filesystem attribute *attribute* from *path*.
*attribute* should be bytes or str (directly or indirectly through the
`PathLike` interface). If it is a string, it is encoded
with the `filesystem encoding and error handler`.

This function can support `specifying a file descriptor` and
`not following symlinks`.

audit-event:: os.removexattr path,attribute os.removexattr

> *Changed in 3.6*: Accepts a :term:`path-like object` for *path* and *attribute*.
