---
id: "python-en-function-asyncio-stream-limit-65536-sock-none-backlog-100-ssl-none"
language: "python"
lang: "en"
category: "function"
name: "*, limit=65536, sock=None, backlog=100, ssl=None, \\"
directive: "function"
module: "asyncio-stream"
source_url: "https://docs.python.org/3/library/asyncio-stream.html#asyncio-stream.*, limit=65536, sock=None, backlog=100, ssl=None, \\"
license: "PSF"
updated: "2026-10-01"
---

# *, limit=65536, sock=None, backlog=100, ssl=None, \

Start a Unix socket server.

Similar to `start_server` but works with Unix sockets.

If *cleanup_socket* is true then the Unix socket will automatically
be removed from the filesystem when the server is closed, unless the
socket has been replaced after the server has been created.

If *mode* is not `None`, the permissions of the Unix socket file
are set to *mode* before the server starts accepting connections.

See also the documentation of `loop.create_unix_server`.

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
