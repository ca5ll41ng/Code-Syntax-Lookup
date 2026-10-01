---
id: "python-en-function-os-pidfd_getfd"
language: "python"
lang: "en"
category: "function"
name: "pidfd_getfd"
signature: "pidfd_getfd(pidfd, targetfd, *, flags=0)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.pidfd_getfd"
license: "PSF"
updated: "2026-10-01"
---

# pidfd_getfd

Duplicate *targetfd* from the process referred to by the process file
descriptor *pidfd*, into the calling process.  The returned file descriptor
is `non-inheritable`.

*flags* is reserved, and currently must be `0`.

See the `pidfd_getfd(2)` man page for more details.

availability:: Linux >= 5.6, Android >= `build-time` API level 31

> *Added in next*
