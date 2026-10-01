---
id: "python-en-function-os-pipe2"
language: "python"
lang: "en"
category: "function"
name: "pipe2"
signature: "pipe2(flags, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.pipe2"
license: "PSF"
updated: "2026-10-01"
---

# pipe2

Create a pipe with *flags* set atomically.
*flags* can be constructed by ORing together one or more of these values:
`O_NONBLOCK`, `O_CLOEXEC`.
Return a pair of file descriptors `(r, w)` usable for reading and writing,
respectively.

availability:: Unix, macOS >= 27.0, not WASI, not iOS.

> *Added in 3.3*
