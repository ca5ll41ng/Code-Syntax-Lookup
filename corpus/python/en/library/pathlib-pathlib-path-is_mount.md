---
id: "python-en-function-pathlib-path-is_mount"
language: "python"
lang: "en"
category: "function"
name: "Path.is_mount"
signature: "Path.is_mount()"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.Path.is_mount"
license: "PSF"
updated: "2026-10-01"
---

# Path.is_mount

Return `True` if the path is a `mount point`: a point in a
file system where a different file system has been mounted.  On POSIX, the
function checks whether *path*'s parent, `path/..`, is on a different
device than *path*, or whether `path/..` and *path* point to the same
i-node on the same device --- this should detect mount points for all Unix
and POSIX variants.  On Windows, a mount point is considered to be a drive
letter root (e.g. `c:\`), a UNC share (e.g. `\\server\share`), or a
mounted filesystem directory.

> *Added in 3.7*

> *Changed in 3.12*: Windows support was added.
