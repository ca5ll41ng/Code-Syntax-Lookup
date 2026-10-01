---
id: "python-zh-function-asyncio-eventloop-loop-sendfile-transport-file"
language: "python"
lang: "zh"
category: "function"
name: "loop.sendfile(transport, file, \\"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.sendfile(transport, file, \\"
license: "PSF"
updated: "2026-10-01"
---

# loop.sendfile(transport, file, \

Send a *file* over a *transport*.  Return the total number of bytes
sent.

如果可用的话，该方法将使用高性能的 :meth:`os.sendfile`。

*file* 必须是个二进制模式打开的常规文件对象。

*offset* tells from where to start reading the file. If specified,
*count* is the total number of bytes to transmit as opposed to
sending the file until EOF is reached. File position is always updated,
even when this method raises an error, and
`file.tell()` can be used to obtain the actual
number of bytes sent.

*fallback* set to `True` makes asyncio to manually read and send
the file when the platform does not support the sendfile system call
(e.g. Windows or SSL socket on Unix).

Raise `SendfileNotAvailableError` if the system does not support
the *sendfile* syscall and *fallback* is `False`.

> *Added in 3.7*
