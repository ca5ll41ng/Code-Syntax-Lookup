---
id: "python-en-function-pathlib-path-copy"
language: "python"
lang: "en"
category: "function"
name: "Path.copy"
signature: "Path.copy(target, *, follow_symlinks=True, preserve_metadata=False)"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.Path.copy"
license: "PSF"
updated: "2026-10-01"
---

# Path.copy

Copy this file or directory tree to the given *target*, and return a new
`Path` instance pointing to *target*.

If the source is a file, the target will be replaced if it is an existing
file. If the source is a symlink and *follow_symlinks* is true (the
default), the symlink's target is copied. Otherwise, the symlink is
recreated at the destination.

If *preserve_metadata* is false (the default), only directory structures
and file data are guaranteed to be copied. Set *preserve_metadata* to true
to ensure that file and directory permissions, flags, last access and
modification times, and extended attributes are copied where supported.
This argument has no effect when copying files on Windows (where
metadata is always preserved).

> **Note**
>
> Where supported by the operating system and file system, this method
> performs a lightweight copy, where data blocks are only copied when
> modified. This is known as copy-on-write.
>

> *Added in 3.14*
