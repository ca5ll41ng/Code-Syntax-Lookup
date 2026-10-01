---
id: "python-en-function-os-memfd_create"
language: "python"
lang: "en"
category: "function"
name: "memfd_create"
signature: "memfd_create(name[, flags=os.MFD_CLOEXEC])"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.memfd_create"
license: "PSF"
updated: "2026-10-01"
---

# memfd_create

Create an anonymous file and return a file descriptor that refers to it.
*flags* must be one of the `os.MFD_*` constants available on the system
(or a bitwise ORed combination of them).  By default, the new file
descriptor is `non-inheritable`.

The name supplied in *name* is used as a filename and will be displayed as
the target of the corresponding symbolic link in the directory
`/proc/self/fd/`. The displayed name is always prefixed with `memfd:`
and serves only for debugging purposes. Names do not affect the behavior of
the file descriptor, and as such multiple files can have the same name
without any side effects.

availability:: Linux >= 3.17.

> *Added in 3.8*

> *Changed in 3.16*: The function is now also available when Python is built against a libc that lacks ``memfd_create()``, such as glibc older than 2.27.
