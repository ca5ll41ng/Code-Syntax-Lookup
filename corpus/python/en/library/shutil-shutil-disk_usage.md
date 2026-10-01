---
id: "python-en-function-shutil-disk_usage"
language: "python"
lang: "en"
category: "function"
name: "disk_usage"
signature: "disk_usage(path)"
directive: "function"
module: "shutil"
source_url: "https://docs.python.org/3/library/shutil.html#shutil.disk_usage"
license: "PSF"
updated: "2026-10-01"
---

# disk_usage

Return disk usage statistics about the given path as a `named tuple`
with the attributes *total*, *used* and *free*, which are the amount of
total, used and free space, in bytes. *path* may be a file or a
directory.

> **Note**
>
> On Unix filesystems, *path* must point to a path within a **mounted**
> filesystem partition. On those platforms, CPython doesn't attempt to
> retrieve disk usage information from non-mounted filesystems.
>

> *Added in 3.3*

> *Changed in 3.8*: On Windows, *path* can now be a file or directory.

availability:: Unix, Windows.
