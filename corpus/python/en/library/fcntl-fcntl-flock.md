---
id: "python-en-function-fcntl-flock"
language: "python"
lang: "en"
category: "function"
name: "flock"
signature: "flock(fd, operation, /)"
directive: "function"
module: "fcntl"
source_url: "https://docs.python.org/3/library/fcntl.html#fcntl.flock"
license: "PSF"
updated: "2026-10-01"
---

# flock

Perform the lock operation *operation* on file descriptor *fd* (file objects providing
a `~io.IOBase.fileno` method are accepted as well). See the Unix manual
`flock(2)` for details.  (On some systems, this function is emulated
using :c`fcntl`.)

If the :c`flock` call fails, an `OSError` exception is raised.

audit-event:: fcntl.flock fd,operation fcntl.flock
