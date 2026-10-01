---
id: "python-en-function-os-setxattr"
language: "python"
lang: "en"
category: "function"
name: "setxattr"
signature: "setxattr(path, attribute, value, flags=0, *, follow_symlinks=True)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.setxattr"
license: "PSF"
updated: "2026-10-01"
---

# setxattr

Set the extended filesystem attribute *attribute* on *path* to *value*.
*attribute* must be a bytes or str with no embedded NULs (directly or
indirectly through the `PathLike` interface). If it is a str,
it is encoded with the `filesystem encoding and error handler`.  *flags* may be
`XATTR_REPLACE` or `XATTR_CREATE`. If `XATTR_REPLACE` is
given and the attribute does not exist, `ENODATA` will be raised.
If `XATTR_CREATE` is given and the attribute already exists, the
attribute will not be created and `EEXISTS` will be raised.

This function can support `specifying a file descriptor` and
`not following symlinks`.

> **Note**
>
> A bug in Linux kernel versions less than 2.6.39 caused the flags argument
> to be ignored on some filesystems.
>

audit-event:: os.setxattr path,attribute,value,flags os.setxattr

> *Changed in 3.6*: Accepts a :term:`path-like object` for *path* and *attribute*.
