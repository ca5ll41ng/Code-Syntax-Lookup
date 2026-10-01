---
id: "python-en-function-os-path-ismount"
language: "python"
lang: "en"
category: "function"
name: "ismount"
signature: "ismount(path)"
directive: "function"
module: "os.path"
source_url: "https://docs.python.org/3/library/os.path.html#os.path.ismount"
license: "PSF"
updated: "2026-10-01"
---

# ismount

Return `True` if pathname *path* is a `mount point`: a point in a
file system where a different file system has been mounted.  On POSIX, the
function checks whether *path*'s parent, `{path}/..`, is on a different
device than *path*, or whether `{path}/..` and *path* point to the same
i-node on the same device --- this should detect mount points for all Unix
and POSIX variants.  It is not able to reliably detect bind mounts on the
same filesystem. On Linux systems, it will always return `True` for btrfs
subvolumes, even if they aren't mount points. On Windows, a drive letter root
and a share UNC are always mount points, and for any other path
`GetVolumePathName` is called to see if it is different from the input path.

> *Changed in 3.4*: Added support for detecting non-root mount points on Windows.

> *Changed in 3.6*: Accepts a :term:`path-like object`.
