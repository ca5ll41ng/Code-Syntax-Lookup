---
id: "python-zh-function-ssl-sslsocket"
language: "python"
lang: "zh"
category: "function"
name: "SSLSocket"
signature: "SSLSocket(socket.socket)"
directive: "class"
module: "ssl"
source_url: "https://docs.python.org/zh-cn/3/library/ssl.html#ssl.SSLSocket"
license: "PSF"
updated: "2026-10-01"
---

# SSLSocket

SSL 套接字提供了 :ref:`socket-objects` 的下列方法：

- `~socket.socket.accept`
- `~socket.socket.bind`
- `~socket.socket.close`
- `~socket.socket.connect`
- `~socket.socket.detach`
- `~socket.socket.fileno`
- `~socket.socket.getpeername`, `~socket.socket.getsockname`
- `~socket.socket.getsockopt`, `~socket.socket.setsockopt`
- `~socket.socket.gettimeout`, `~socket.socket.settimeout`,
  `~socket.socket.setblocking`
- `~socket.socket.listen`
- `~socket.socket.makefile`
- `~socket.socket.recv`, `~socket.socket.recv_into`
  (but passing a non-zero `flags` argument is not allowed)
- `~socket.socket.send`, `~socket.socket.sendall` (with
  the same limitation)
- `~socket.socket.sendfile` (it may be high-performant only when
  the kernel TLS is enabled by setting `~ssl.OP_ENABLE_KTLS` or when a
  socket is plain-text, else `~socket.socket.send` will be used)
- `~socket.socket.shutdown`

However, since the SSL (and TLS) protocol has its own framing atop
of TCP, the SSL sockets abstraction can, in certain respects, diverge from
the specification of normal, OS-level sockets.  See especially the
`notes on non-blocking sockets`.

Instances of `SSLSocket` must be created using the
`SSLContext.wrap_socket` method.

> *Changed in 3.5*: The :meth:`sendfile` method was added.

> *Changed in 3.5*: The :meth:`shutdown` does not reset the socket timeout each time bytes are received or sent. The socket timeout is now the maximum total duration of the shutdown.

> *Deprecated since 3.6*: It is deprecated to create a :class:`SSLSocket` instance directly, use :meth:`SSLContext.wrap_socket` to wrap a socket.

> *Changed in 3.7*: :class:`SSLSocket` instances must be created with :meth:`~SSLContext.wrap_socket`. In earlier versions, it was possible to create instances directly. This was never documented or officially supported.

> *Changed in 3.10*: Python now uses ``SSL_read_ex`` and ``SSL_write_ex`` internally. The functions support reading and writing of data larger than 2 GB. Writing zero-length data no longer fails with a protocol violation error.

> *Changed in 3.15*: Python now uses ``SSL_sendfile`` internally when possible. The function sends a file more efficiently because it performs TLS encryption in the kernel to avoid additional context switches.
