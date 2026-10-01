---
id: "python-en-function-os-chown"
language: "python"
lang: "en"
category: "function"
name: "chown"
signature: "chown(path, uid, gid, *, dir_fd=None, follow_symlinks=True)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.chown"
license: "PSF"
updated: "2026-10-01"
---

# chown

Change the owner and group id of *path* to the numeric *uid* and *gid*.  To
leave one of the ids unchanged, set it to -1.

This function can support `specifying a file descriptor`,
`paths relative to directory descriptors` and `not
following symlinks`.

See `shutil.chown` for a higher-level function that accepts names in
addition to numeric ids.

audit-event:: os.chown path,uid,gid,dir_fd os.chown

availability:: Unix.

> *Changed in 3.3*: Added support for specifying *path* as an open file descriptor, and the *dir_fd* and *follow_symlinks* arguments.

> *Changed in 3.6*: Supports a :term:`path-like object`.
