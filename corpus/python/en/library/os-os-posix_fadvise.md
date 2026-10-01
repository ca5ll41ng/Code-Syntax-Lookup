---
id: "python-en-function-os-posix_fadvise"
language: "python"
lang: "en"
category: "function"
name: "posix_fadvise"
signature: "posix_fadvise(fd, offset, len, advice, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.posix_fadvise"
license: "PSF"
updated: "2026-10-01"
---

# posix_fadvise

Announces an intention to access data in a specific pattern thus allowing
the kernel to make optimizations.
The advice applies to the region of the file specified by *fd* starting at
*offset* and continuing for *len* bytes.
*advice* is one of `POSIX_FADV_NORMAL`, `POSIX_FADV_SEQUENTIAL`,
`POSIX_FADV_RANDOM`, `POSIX_FADV_NOREUSE`,
`POSIX_FADV_WILLNEED` or `POSIX_FADV_DONTNEED`.

availability:: Unix, not macOS, not iOS.

> *Added in 3.3*
