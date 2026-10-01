---
id: "python-en-function-os-replace"
language: "python"
lang: "en"
category: "function"
name: "replace"
signature: "replace(src, dst, *, src_dir_fd=None, dst_dir_fd=None)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.replace"
license: "PSF"
updated: "2026-10-01"
---

# replace

Rename the file or directory *src* to *dst*.  If *dst* is a non-empty directory,
`OSError` will be raised.  If *dst* exists and is a file, it will
be replaced silently if the user has permission.  The operation may fail
if *src* and *dst* are on different filesystems.  If successful,
the renaming will be an atomic operation (this is a POSIX requirement).

This function can support specifying *src_dir_fd* and/or *dst_dir_fd* to
supply `paths relative to directory descriptors`.

audit-event:: os.rename src,dst,src_dir_fd,dst_dir_fd os.replace

> *Added in 3.3*

> *Changed in 3.6*: Accepts a :term:`path-like object` for *src* and *dst*.
