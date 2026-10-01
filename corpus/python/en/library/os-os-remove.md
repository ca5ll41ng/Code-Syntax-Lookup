---
id: "python-en-function-os-remove"
language: "python"
lang: "en"
category: "function"
name: "remove"
signature: "remove(path, *, dir_fd=None)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.remove"
license: "PSF"
updated: "2026-10-01"
---

# remove

Remove (delete) the file *path*.  If *path* is a directory, an
`OSError` is raised.  Use `rmdir` to remove directories.
If the file does not exist, a `FileNotFoundError` is raised.

This function can support `paths relative to directory descriptors`.

On Windows, attempting to remove a file that is in use causes an exception to
be raised; on Unix, the directory entry is removed but the storage allocated
to the file is not made available until the original file is no longer in use.

This function is semantically identical to `unlink`.

audit-event:: os.remove path,dir_fd os.remove

> *Changed in 3.3*: Added the *dir_fd* parameter.

> *Changed in 3.6*: Accepts a :term:`path-like object`.
