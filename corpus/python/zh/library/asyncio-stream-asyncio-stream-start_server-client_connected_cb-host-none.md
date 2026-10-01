---
id: "python-zh-function-asyncio-stream-start_server-client_connected_cb-host-none"
language: "python"
lang: "zh"
category: "function"
name: "start_server(client_connected_cb, host=None, \\"
directive: "function"
module: "asyncio-stream"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-stream.html#asyncio-stream.start_server(client_connected_cb, host=None, \\"
license: "PSF"
updated: "2026-10-01"
---

# start_server(client_connected_cb, host=None, \

启动套接字服务。

The *client_connected_cb* callback is called whenever a new client
connection is established.  It receives a `(reader, writer)` pair
as two arguments, instances of the `StreamReader` and
`StreamWriter` classes.

*client_connected_cb* can be a plain callable or a
`coroutine function`; if it is a coroutine function,
it will be automatically scheduled as a `Task`.

*limit* determines the buffer size limit used by the
returned `StreamReader` instance.  By default the *limit*
is set to 64 KiB.

The rest of the arguments are passed directly to
`loop.create_server`.

> **Note**
>
> The *sock* argument transfers ownership of the socket to the
> server created. To close the socket, call the server's
> `~asyncio.Server.close` method.
>

> *Changed in 3.7*: Added the *ssl_handshake_timeout* and *start_serving* parameters.

> *Changed in 3.10*: Removed the *loop* parameter.

> *Changed in 3.11*: Added the *ssl_shutdown_timeout* parameter.

> *Changed in 3.13*: Added the *keep_alive* parameter.
