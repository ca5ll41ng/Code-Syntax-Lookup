---
id: "python-en-function-os-path-isdevdrive"
language: "python"
lang: "en"
category: "function"
name: "isdevdrive"
signature: "isdevdrive(path)"
directive: "function"
module: "os.path"
source_url: "https://docs.python.org/3/library/os.path.html#os.path.isdevdrive"
license: "PSF"
updated: "2026-10-01"
---

# isdevdrive

Return `True` if pathname *path* is located on a Windows Dev Drive.
A Dev Drive is optimized for developer scenarios, and offers faster
performance for reading and writing files. It is recommended for use for
source code, temporary build directories, package caches, and other
IO-intensive operations.

May raise an error for an invalid path, for example, one without a
recognizable drive, but returns `False` on platforms that do not support
Dev Drives. See [the Windows documentation](https://learn.microsoft.com/windows/dev-drive/)
for information on enabling and creating Dev Drives.

> *Added in 3.12*

> *Changed in 3.13*: The function is now available on all platforms, and will always return ``False`` on those that have no support for Dev Drives
