---
id: "python-en-function-os-grantpt"
language: "python"
lang: "en"
category: "function"
name: "grantpt"
signature: "grantpt(fd, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.grantpt"
license: "PSF"
updated: "2026-10-01"
---

# grantpt

Grant access to the slave pseudo-terminal device associated with the
master pseudo-terminal device to which the file descriptor *fd* refers.
The file descriptor *fd* is not closed upon failure.

Calls the C standard library function :c`grantpt`.

availability:: Unix, not WASI.

> *Added in 3.13*
