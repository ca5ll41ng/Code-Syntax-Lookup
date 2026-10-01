---
id: "python-en-function-os-posix_openpt"
language: "python"
lang: "en"
category: "function"
name: "posix_openpt"
signature: "posix_openpt(oflag, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.posix_openpt"
license: "PSF"
updated: "2026-10-01"
---

# posix_openpt

Open and return a file descriptor for a master pseudo-terminal device.

Calls the C standard library function :c`posix_openpt`. The *oflag*
argument is used to set file status flags and file access modes as
specified in the manual page of :c`posix_openpt` of your system.

The returned file descriptor is `non-inheritable`.
If the value `O_CLOEXEC` is available on the system, it is added to
*oflag*.

availability:: Unix, not WASI.

> *Added in 3.13*
