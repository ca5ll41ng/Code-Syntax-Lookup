---
id: "python-en-function-os-fstatvfs"
language: "python"
lang: "en"
category: "function"
name: "fstatvfs"
signature: "fstatvfs(fd, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.fstatvfs"
license: "PSF"
updated: "2026-10-01"
---

# fstatvfs

Return information about the filesystem containing the file associated with
file descriptor *fd* in a `statvfs_result`, like `statvfs`.
As of Python 3.3, this is equivalent to `os.statvfs(fd)`.

availability:: Unix.
