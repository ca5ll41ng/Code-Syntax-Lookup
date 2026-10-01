---
id: "python-en-function-os-posix_fallocate"
language: "python"
lang: "en"
category: "function"
name: "posix_fallocate"
signature: "posix_fallocate(fd, offset, len, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.posix_fallocate"
license: "PSF"
updated: "2026-10-01"
---

# posix_fallocate

Ensures that enough disk space is allocated for the file specified by *fd*
starting from *offset* and continuing for *len* bytes.

availability:: Unix, not macOS, not iOS.

> *Added in 3.3*
