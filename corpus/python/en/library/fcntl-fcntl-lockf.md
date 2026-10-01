---
id: "python-en-function-fcntl-lockf"
language: "python"
lang: "en"
category: "function"
name: "lockf"
signature: "lockf(fd, cmd, len=0, start=0, whence=0, /)"
directive: "function"
module: "fcntl"
source_url: "https://docs.python.org/3/library/fcntl.html#fcntl.lockf"
license: "PSF"
updated: "2026-10-01"
---

# lockf

This is essentially a wrapper around the `~fcntl.fcntl` locking calls.
*fd* is the file descriptor (file objects providing a `~io.IOBase.fileno`
method are accepted as well) of the file to lock or unlock, and *cmd*
is one of the following values:

data:: LOCK_UN

data:: LOCK_SH

data:: LOCK_EX

data:: LOCK_NB

If `LOCK_NB` is used and the lock cannot be acquired, an
`OSError` will be raised and the exception will have an *errno*
attribute set to `~errno.EACCES` or `~errno.EAGAIN` (depending on the
operating system; for portability, check for both values).  On at least some
systems, `LOCK_EX` can only be used if the file descriptor refers to a
file opened for writing.

*len* is the number of bytes to lock, *start* is the byte offset at
which the lock starts, relative to *whence*, and *whence* is as with
`io.IOBase.seek`, specifically:

* `0` -- relative to the start of the file (`os.SEEK_SET`)
* `1` -- relative to the current buffer position (`os.SEEK_CUR`)
* `2` -- relative to the end of the file (`os.SEEK_END`)

The default for *start* is 0, which means to start at the beginning of the file.
The default for *len* is 0 which means to lock to the end of the file.  The
default for *whence* is also 0.

audit-event:: fcntl.lockf fd,cmd,len,start,whence fcntl.lockf
