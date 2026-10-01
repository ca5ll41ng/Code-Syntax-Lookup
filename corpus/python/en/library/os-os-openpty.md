---
id: "python-en-function-os-openpty"
language: "python"
lang: "en"
category: "function"
name: "openpty"
signature: "openpty()"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.openpty"
license: "PSF"
updated: "2026-10-01"
---

# openpty

Open a new pseudo-terminal pair. Return a pair of file descriptors
`(master, slave)` for the pty and the tty, respectively. The new file
descriptors are `non-inheritable`. For a (slightly) more
portable approach, use the `pty` module.

availability:: Unix, not WASI.

> *Changed in 3.4*: The new file descriptors are now non-inheritable.
