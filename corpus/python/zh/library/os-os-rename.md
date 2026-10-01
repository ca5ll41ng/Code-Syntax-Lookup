---
id: "python-zh-function-os-rename"
language: "python"
lang: "zh"
category: "function"
name: "rename"
signature: "rename(src, dst, *, src_dir_fd=None, dst_dir_fd=None)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.rename"
license: "PSF"
updated: "2026-10-01"
---

# rename

Rename the file or directory *src* to *dst*. If *dst* exists, the operation
will fail with an `OSError` subclass in a number of cases:

On Windows, if *dst* exists a `FileExistsError` is always raised.
The operation may fail if *src* and *dst* are on different filesystems. Use
`shutil.move` to support moves to a different filesystem.

On Unix, if *src* is a file and *dst* is a directory or vice-versa, an
`IsADirectoryError` or a `NotADirectoryError` will be raised
respectively.  If both are directories and *dst* is empty, *dst* will be
silently replaced.  If *dst* is a non-empty directory, an `OSError`
is raised. If both are files, *dst* will be replaced silently if the user
has permission.  The operation may fail on some Unix flavors if *src* and
*dst* are on different filesystems.  If successful, the renaming will be an
atomic operation (this is a POSIX requirement).

This function can support specifying *src_dir_fd* and/or *dst_dir_fd* to
supply `paths relative to directory descriptors`.

如果需要在不同平台上都能替换目标，请使用 :func:`replace`。

audit-event:: os.rename src,dst,src_dir_fd,dst_dir_fd os.rename

> *Changed in 3.3*: Added the *src_dir_fd* and *dst_dir_fd* parameters.

> *Changed in 3.6*: Accepts a :term:`path-like object` for *src* and *dst*.
