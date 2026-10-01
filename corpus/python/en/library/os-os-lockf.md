---
id: "python-en-function-os-lockf"
language: "python"
lang: "en"
category: "function"
name: "lockf"
signature: "lockf(fd, cmd, len, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.lockf"
license: "PSF"
updated: "2026-10-01"
---

# lockf

Apply, test or remove a POSIX lock on an open file descriptor.
*fd* is an open file descriptor.
*cmd* specifies the command to use - one of `F_LOCK`, `F_TLOCK`,
`F_ULOCK` or `F_TEST`.
*len* specifies the section of the file to lock.

audit-event:: os.lockf fd,cmd,len os.lockf

availability:: Unix.

> *Added in 3.3*
