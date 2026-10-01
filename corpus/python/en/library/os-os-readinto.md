---
id: "python-en-function-os-readinto"
language: "python"
lang: "en"
category: "function"
name: "readinto"
signature: "readinto(fd, buffer, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.readinto"
license: "PSF"
updated: "2026-10-01"
---

# readinto

Read from a file descriptor *fd* into a mutable
`buffer object` *buffer*.

The *buffer* should be mutable and `bytes-like`. On
success, returns the number of bytes read. Less bytes may be read than the
size of the buffer. The underlying system call will be retried when
interrupted by a signal, unless the signal handler raises an exception.
Other errors will not be retried and an error will be raised.

Returns 0 if *fd* is at end of file or if the provided *buffer* has
length 0 (which can be used to check for errors without reading data).
Never returns negative.

> **Note**
>
> This function is intended for low-level I/O and must be applied to a file
> descriptor as returned by `os.open` or `os.pipe`.  To read a
> "file object" returned by the built-in function `open`, or
> `sys.stdin`, use its member functions, for example
> `io.BufferedIOBase.readinto`, `io.BufferedIOBase.read`, or
> `io.TextIOBase.read`
>

> *Added in 3.14*
