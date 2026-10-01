---
id: "python-en-function-pty-openpty"
language: "python"
lang: "en"
category: "function"
name: "openpty"
signature: "openpty()"
directive: "function"
module: "pty"
source_url: "https://docs.python.org/3/library/pty.html#pty.openpty"
license: "PSF"
updated: "2026-10-01"
---

# openpty

Open a new pseudo-terminal pair, using `os.openpty` if possible, or
emulation code for generic Unix systems. Return a pair of file descriptors
`(master, slave)`, for the master and the slave end, respectively.
