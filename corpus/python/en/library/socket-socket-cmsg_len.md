---
id: "python-en-function-socket-cmsg_len"
language: "python"
lang: "en"
category: "function"
name: "CMSG_LEN"
signature: "CMSG_LEN(length)"
directive: "function"
module: "socket"
source_url: "https://docs.python.org/3/library/socket.html#socket.CMSG_LEN"
license: "PSF"
updated: "2026-10-01"
---

# CMSG_LEN

Return the total length, without trailing padding, of an ancillary
data item with associated data of the given *length*.  This value
can often be used as the buffer size for `~socket.recvmsg` to
receive a single item of ancillary data, but RFC 3542 requires
portable applications to use `CMSG_SPACE` and thus include
space for padding, even when the item will be the last in the
buffer.  Raises `OverflowError` if *length* is outside the
permissible range of values.

availability:: Unix, not WASI.

> *Added in 3.3*
