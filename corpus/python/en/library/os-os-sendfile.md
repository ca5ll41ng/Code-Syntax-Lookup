---
id: "python-en-function-os-sendfile"
language: "python"
lang: "en"
category: "function"
name: "sendfile"
signature: "sendfile(out_fd, in_fd, offset, count)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.sendfile"
license: "PSF"
updated: "2026-10-01"
---

# sendfile

Copy *count* bytes from file descriptor *in_fd* to file descriptor *out_fd*
starting at *offset*.
Return the number of bytes sent. When EOF is reached return `0`.

The first function notation is supported by all platforms that define
`sendfile`.

On Linux, if *offset* is given as `None`, the bytes are read from the
current position of *in_fd* and the position of *in_fd* is updated.

The second case may be used on macOS and FreeBSD where *headers* and
*trailers* are arbitrary sequences of buffers that are written before and
after the data from *in_fd* is written. It returns the same as the first case.

On macOS and FreeBSD, a value of `0` for *count* specifies to send until
the end of *in_fd* is reached.

All platforms support sockets as *out_fd* file descriptor, and some platforms
allow other types (e.g. regular file, pipe) as well.

Cross-platform applications should not use *headers*, *trailers* and *flags*
arguments.

availability:: Unix, not WASI.

> **Note**
>
> For a higher-level wrapper of `sendfile`, see
> `socket.socket.sendfile`.
>

> *Added in 3.3*

> *Changed in 3.9*: Parameters *out* and *in* was renamed to *out_fd* and *in_fd*.
