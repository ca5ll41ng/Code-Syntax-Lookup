---
id: "python-en-function-os-fchown"
language: "python"
lang: "en"
category: "function"
name: "fchown"
signature: "fchown(fd, uid, gid)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.fchown"
license: "PSF"
updated: "2026-10-01"
---

# fchown

Change the owner and group id of the file given by *fd* to the numeric *uid*
and *gid*.  To leave one of the ids unchanged, set it to -1.  See
`chown`.  As of Python 3.3, this is equivalent to `os.chown(fd, uid,
gid)`.

audit-event:: os.chown path,uid,gid,dir_fd os.fchown

availability:: Unix.
