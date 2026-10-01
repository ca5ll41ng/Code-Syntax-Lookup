---
id: "python-zh-function-asyncio-stream-cleanup_socket-true-mode-none"
language: "python"
lang: "zh"
category: "function"
name: "cleanup_socket=True, mode=None)"
directive: "function"
module: "asyncio-stream"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-stream.html#asyncio-stream.cleanup_socket=True, mode=None)"
license: "PSF"
updated: "2026-10-01"
---

# cleanup_socket=True, mode=None)

启动一个 Unix 套接字服务。

与 :func:`start_server` 相似，但是是在 Unix 套接字上的操作。

If *cleanup_socket* is true then the Unix socket will automatically
be removed from the filesystem when the server is closed, unless the
socket has been replaced after the server has been created.

If *mode* is not `None`, the permissions of the Unix socket file
are set to *mode* before the server starts accepting connections.

请看文档 :meth:`loop.create_unix_server`.

> **Note**
>
> The *sock* argument transfers ownership of the socket to the
> server created. To close the socket, call the server's
> `~asyncio.Server.close` method.
>

availability:: Unix.

> *Changed in 3.7*: Added the *ssl_handshake_timeout* and *start_serving* parameters. The *path* parameter can now be a :term:`path-like object`.

> *Changed in 3.10*: Removed the *loop* parameter.

> *Changed in 3.11*: Added the *ssl_shutdown_timeout* parameter.

> *Changed in 3.13*: Added the *cleanup_socket* parameter.

> *Changed in 3.16*: Added the *mode* parameter.
