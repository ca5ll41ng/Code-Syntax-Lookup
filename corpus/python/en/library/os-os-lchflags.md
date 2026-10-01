---
id: "python-en-function-os-lchflags"
language: "python"
lang: "en"
category: "function"
name: "lchflags"
signature: "lchflags(path, flags)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.lchflags"
license: "PSF"
updated: "2026-10-01"
---

# lchflags

Set the flags of *path* to the numeric *flags*, like `chflags`, but do
not follow symbolic links.  As of Python 3.3, this is equivalent to
`os.chflags(path, flags, follow_symlinks=False)`.

audit-event:: os.chflags path,flags os.lchflags

availability:: Unix, not WASI.

> *Changed in 3.6*: Accepts a :term:`path-like object`.
