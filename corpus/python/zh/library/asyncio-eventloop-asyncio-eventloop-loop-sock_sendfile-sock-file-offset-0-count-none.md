---
id: "python-zh-function-asyncio-eventloop-loop-sock_sendfile-sock-file-offset-0-count-none"
language: "python"
lang: "zh"
category: "function"
name: "loop.sock_sendfile(sock, file, offset=0, count=None, \\"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.sock_sendfile(sock, file, offset=0, count=None, \\"
license: "PSF"
updated: "2026-10-01"
---

# loop.sock_sendfile(sock, file, offset=0, count=None, \

Send a file using high-performance `os.sendfile` if possible.
Return the total number of bytes sent.

:meth:`socket.sendfile() <socket.socket.sendfile>` 的异步版本。

*sock* must be a non-blocking `socket.SOCK_STREAM`
`~socket.socket`.

*file* 必须是个用二进制方式打开的常规文件对象。

*offset* tells from where to start reading the file. If specified,
*count* is the total number of bytes to transmit as opposed to
sending the file until EOF is reached. File position is always updated,
even when this method raises an error, and
`file.tell()` can be used to obtain the actual
number of bytes sent.

*fallback*, when set to `True`, makes asyncio manually read and send
the file when the platform does not support the sendfile syscall
(e.g. Windows or SSL socket on Unix).

Raise `SendfileNotAvailableError` if the system does not support
*sendfile* syscall and *fallback* is `False`.

*sock* 必须是个非阻塞套接字。

> *Added in 3.7*
