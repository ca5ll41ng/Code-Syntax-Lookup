---
id: "python-zh-function-asyncio-eventloop-path-none-ssl-none-sock-none"
language: "python"
lang: "zh"
category: "function"
name: "path=None, *, ssl=None, sock=None, \\"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio-eventloop.path=None, *, ssl=None, sock=None, \\"
license: "PSF"
updated: "2026-10-01"
---

# path=None, *, ssl=None, sock=None, \

创建 Unix 连接。

The socket family will be :py`~socket.AF_UNIX`; socket
type will be :py`~socket.SOCK_STREAM`.

成功时返回一个 ``(transport, protocol)`` 元组。

*path* is the name of a Unix domain socket and is required,
unless a *sock* parameter is specified.  Abstract Unix sockets,
`str`, `bytes`, and `~pathlib.Path` paths are
supported.

See the documentation of the `loop.create_connection` method
for information about arguments to this method.

availability:: Unix.

> *Changed in 3.7*: Added the *ssl_handshake_timeout* parameter. The *path* parameter can now be a :term:`path-like object`.

> *Changed in 3.11*: Added the *ssl_shutdown_timeout* parameter.
