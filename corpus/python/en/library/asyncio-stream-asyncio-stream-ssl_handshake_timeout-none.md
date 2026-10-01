---
id: "python-en-function-asyncio-stream-ssl_handshake_timeout-none"
language: "python"
lang: "en"
category: "function"
name: "ssl_handshake_timeout=None, \\"
directive: "function"
module: "asyncio-stream"
source_url: "https://docs.python.org/3/library/asyncio-stream.html#asyncio-stream.ssl_handshake_timeout=None, \\"
license: "PSF"
updated: "2026-10-01"
---

# ssl_handshake_timeout=None, \

Start a socket server.

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
