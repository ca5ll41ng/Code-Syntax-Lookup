---
id: "python-en-function-socket-cmsg_space"
language: "python"
lang: "en"
category: "function"
name: "CMSG_SPACE"
signature: "CMSG_SPACE(length)"
directive: "function"
module: "socket"
source_url: "https://docs.python.org/3/library/socket.html#socket.CMSG_SPACE"
license: "PSF"
updated: "2026-10-01"
---

# CMSG_SPACE

Return the buffer size needed for `~socket.recvmsg` to
receive an ancillary data item with associated data of the given
*length*, along with any trailing padding.  The buffer space needed
to receive multiple items is the sum of the `CMSG_SPACE`
values for their associated data lengths.  Raises
`OverflowError` if *length* is outside the permissible range
of values.

Note that some systems might support ancillary data without
providing this function.  Also note that setting the buffer size
using the results of this function may not precisely limit the
amount of ancillary data that can be received, since additional
data may be able to fit into the padding area.

availability:: Unix, not WASI.

> *Added in 3.3*
