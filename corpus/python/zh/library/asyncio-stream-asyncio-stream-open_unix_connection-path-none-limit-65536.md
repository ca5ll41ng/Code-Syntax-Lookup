---
id: "python-zh-function-asyncio-stream-open_unix_connection-path-none-limit-65536"
language: "python"
lang: "zh"
category: "function"
name: "open_unix_connection(path=None, *, limit=65536, \\"
directive: "function"
module: "asyncio-stream"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-stream.html#asyncio-stream.open_unix_connection(path=None, *, limit=65536, \\"
license: "PSF"
updated: "2026-10-01"
---

# open_unix_connection(path=None, *, limit=65536, \

Establish a Unix socket connection and return a pair of
`(reader, writer)`.

与 :func:`open_connection` 相似，但是是在 Unix 套接字上的操作。

请看文档 :meth:`loop.create_unix_connection`.

> **Note**
>
> The *sock* argument transfers ownership of the socket to the
> `StreamWriter` created. To close the socket, call its
> `~asyncio.StreamWriter.close` method.
>

availability:: Unix.

> *Changed in 3.7*: Added the *ssl_handshake_timeout* parameter. The *path* parameter can now be a :term:`path-like object`

> *Changed in 3.10*: Removed the *loop* parameter.

> *Changed in 3.11*: Added the *ssl_shutdown_timeout* parameter.
