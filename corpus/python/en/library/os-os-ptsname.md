---
id: "python-en-function-os-ptsname"
language: "python"
lang: "en"
category: "function"
name: "ptsname"
signature: "ptsname(fd, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.ptsname"
license: "PSF"
updated: "2026-10-01"
---

# ptsname

Return the name of the slave pseudo-terminal device associated with the
master pseudo-terminal device to which the file descriptor *fd* refers.
The file descriptor *fd* is not closed upon failure.

Calls the reentrant C standard library function :c`ptsname_r` if
it is available; otherwise, the C standard library function
:c`ptsname`, which is not guaranteed to be thread-safe, is called.

availability:: Unix, not WASI.

> *Added in 3.13*
