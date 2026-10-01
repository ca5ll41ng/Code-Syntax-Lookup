---
id: "python-en-function-os-fchmod"
language: "python"
lang: "en"
category: "function"
name: "fchmod"
signature: "fchmod(fd, mode)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.fchmod"
license: "PSF"
updated: "2026-10-01"
---

# fchmod

Change the mode of the file given by *fd* to the numeric *mode*.  See the
docs for `chmod` for possible values of *mode*.  As of Python 3.3, this
is equivalent to `os.chmod(fd, mode)`.

audit-event:: os.chmod path,mode,dir_fd os.fchmod

availability:: Unix, Windows.

> *Changed in 3.13*: Added support on Windows.
