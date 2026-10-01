---
id: "python-en-function-os-lchmod"
language: "python"
lang: "en"
category: "function"
name: "lchmod"
signature: "lchmod(path, mode)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.lchmod"
license: "PSF"
updated: "2026-10-01"
---

# lchmod

Change the mode of *path* to the numeric *mode*. If path is a symlink, this
affects the symlink rather than the target.  See the docs for `chmod`
for possible values of *mode*.  As of Python 3.3, this is equivalent to
`os.chmod(path, mode, follow_symlinks=False)`.

`lchmod()` is not part of POSIX, but Unix implementations may have it if
changing the mode of symbolic links is supported.

audit-event:: os.chmod path,mode,dir_fd os.lchmod

availability:: Unix, Windows, not Linux, FreeBSD >= 1.3, NetBSD >= 1.3, not OpenBSD

> *Changed in 3.6*: Accepts a :term:`path-like object`.

> *Changed in 3.13*: Added support on Windows.
