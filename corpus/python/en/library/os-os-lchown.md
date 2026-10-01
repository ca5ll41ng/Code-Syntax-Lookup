---
id: "python-en-function-os-lchown"
language: "python"
lang: "en"
category: "function"
name: "lchown"
signature: "lchown(path, uid, gid)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.lchown"
license: "PSF"
updated: "2026-10-01"
---

# lchown

Change the owner and group id of *path* to the numeric *uid* and *gid*.  This
function will not follow symbolic links.  As of Python 3.3, this is equivalent
to `os.chown(path, uid, gid, follow_symlinks=False)`.

audit-event:: os.chown path,uid,gid,dir_fd os.lchown

availability:: Unix.

> *Changed in 3.6*: Accepts a :term:`path-like object`.
