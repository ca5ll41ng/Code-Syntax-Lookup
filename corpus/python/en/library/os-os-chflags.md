---
id: "python-en-function-os-chflags"
language: "python"
lang: "en"
category: "function"
name: "chflags"
signature: "chflags(path, flags, *, follow_symlinks=True)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.chflags"
license: "PSF"
updated: "2026-10-01"
---

# chflags

Set the flags of *path* to the numeric *flags*. *flags* may take a combination
(bitwise OR) of the following values (as defined in the `stat` module):

* `stat.UF_NODUMP`
* `stat.UF_IMMUTABLE`
* `stat.UF_APPEND`
* `stat.UF_OPAQUE`
* `stat.UF_NOUNLINK`
* `stat.UF_COMPRESSED`
* `stat.UF_HIDDEN`
* `stat.SF_ARCHIVED`
* `stat.SF_IMMUTABLE`
* `stat.SF_APPEND`
* `stat.SF_NOUNLINK`
* `stat.SF_SNAPSHOT`

This function can support `not following symlinks`.

audit-event:: os.chflags path,flags os.chflags

availability:: Unix, not WASI.

> *Changed in 3.3*: Added the *follow_symlinks* parameter.

> *Changed in 3.6*: Accepts a :term:`path-like object`.
