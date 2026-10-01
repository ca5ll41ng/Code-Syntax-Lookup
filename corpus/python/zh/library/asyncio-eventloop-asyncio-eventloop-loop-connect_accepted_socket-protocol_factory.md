---
id: "python-zh-function-asyncio-eventloop-loop-connect_accepted_socket-protocol_factory"
language: "python"
lang: "zh"
category: "function"
name: "loop.connect_accepted_socket(protocol_factory, \\"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.connect_accepted_socket(protocol_factory, \\"
license: "PSF"
updated: "2026-10-01"
---

# loop.connect_accepted_socket(protocol_factory, \

将已被接受的连接包装成一个传输/协议对。

This method can be used by servers that accept connections outside
of asyncio but that use asyncio to handle them.

参数：

* *protocol_factory* must be a callable returning a
  `protocol` implementation.

* *sock* is a preexisting socket object returned from
  `socket.accept`.

> **Note**
>
> The *sock* argument transfers ownership of the socket to the
> transport created. To close the socket, call the transport's
> `~asyncio.BaseTransport.close` method.
>

* *ssl* can be set to an `~ssl.SSLContext` to enable SSL over
  the accepted connections.

* *ssl_handshake_timeout* is (for an SSL connection) the time in seconds to
  wait for the SSL handshake to complete before aborting the connection.
  `60.0` seconds if `None` (default).

* *ssl_shutdown_timeout* is the time in seconds to wait for the SSL shutdown
  to complete before aborting the connection. `30.0` seconds if `None`
  (default).

返回一个 ``(transport, protocol)`` 对。

> *Added in 3.5.3*

> *Changed in 3.7*: Added the *ssl_handshake_timeout* parameter.

> *Changed in 3.11*: Added the *ssl_shutdown_timeout* parameter.
