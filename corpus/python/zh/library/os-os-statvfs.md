---
id: "python-zh-function-os-statvfs"
language: "python"
lang: "zh"
category: "function"
name: "statvfs"
signature: "statvfs(path)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.statvfs"
license: "PSF"
updated: "2026-10-01"
---

# statvfs

Perform a `statvfs(3)` system call on the given path.  The return value
is a `statvfs_result` whose attributes describe the filesystem
on the given path and correspond to the members of the :c`statvfs`
structure.

本函数支持 :ref:`指定文件描述符为参数 <path_fd>`。

availability:: Unix.

> *Changed in 3.3*: Added support for specifying *path* as an open file descriptor.

> *Changed in 3.6*: Accepts a :term:`path-like object`.
