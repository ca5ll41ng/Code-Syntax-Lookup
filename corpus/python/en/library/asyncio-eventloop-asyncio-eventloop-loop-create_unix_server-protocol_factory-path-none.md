---
id: "python-en-function-asyncio-eventloop-loop-create_unix_server-protocol_factory-path-none"
language: "python"
lang: "en"
category: "function"
name: "loop.create_unix_server(protocol_factory, path=None, \\"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.create_unix_server(protocol_factory, path=None, \\"
license: "PSF"
updated: "2026-10-01"
---

# loop.create_unix_server(protocol_factory, path=None, \

Similar to `loop.create_server` but works with the
:py`~socket.AF_UNIX` socket family.

*path* is the name of a Unix domain socket, and is required,
unless a *sock* argument is provided.  Abstract Unix sockets,
`str`, `bytes`, and `~pathlib.Path` paths
are supported.

If *cleanup_socket* is true then the Unix socket will automatically
be removed from the filesystem when the server is closed, unless the
socket has been replaced after the server has been created.

If *mode* is not `None`, the permissions of the socket file created
for *path* are changed to *mode* (as accepted by `os.chmod`)
right after binding, before the server starts accepting connections,
so a connection can never be accepted while the default,
umask-derived permissions are still in effect.  *mode* cannot be
combined with *sock* and is not supported for abstract Unix sockets.

See the documentation of the `loop.create_server` method
for information about arguments to this method.

availability:: Unix.

> *Changed in 3.7*: Added the *ssl_handshake_timeout* and *start_serving* parameters. The *path* parameter can now be a :class:`~pathlib.Path` object.

> *Changed in 3.11*: Added the *ssl_shutdown_timeout* parameter.

> *Changed in 3.13*: Added the *cleanup_socket* parameter.

> *Changed in 3.16*: Added the *mode* parameter.
