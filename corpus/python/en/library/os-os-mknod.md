---
id: "python-en-function-os-mknod"
language: "python"
lang: "en"
category: "function"
name: "mknod"
signature: "mknod(path, mode=0o600, device=0, *, dir_fd=None)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.mknod"
license: "PSF"
updated: "2026-10-01"
---

# mknod

Create a filesystem node (file, device special file or named pipe) named
*path*. *mode* specifies both the permissions to use and the type of node
to be created, being combined (bitwise OR) with one of `stat.S_IFREG`,
`stat.S_IFCHR`, `stat.S_IFBLK`, and `stat.S_IFIFO`.
For `stat.S_IFCHR` and `stat.S_IFBLK`, *device* defines the
newly created device special file (probably using
`os.makedev`), otherwise it is ignored.

This function can also support `paths relative to directory descriptors`.

availability:: Unix, not WASI.

> *Changed in 3.3*: Added the *dir_fd* parameter.

> *Changed in 3.6*: Accepts a :term:`path-like object`.
