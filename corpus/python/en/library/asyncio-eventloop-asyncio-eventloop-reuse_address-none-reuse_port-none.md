---
id: "python-en-function-asyncio-eventloop-reuse_address-none-reuse_port-none"
language: "python"
lang: "en"
category: "function"
name: "reuse_address=None, reuse_port=None, \\"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/3/library/asyncio-eventloop.html#asyncio-eventloop.reuse_address=None, reuse_port=None, \\"
license: "PSF"
updated: "2026-10-01"
---

# reuse_address=None, reuse_port=None, \

Create a TCP server (socket type `~socket.SOCK_STREAM`) listening
on *port* of the *host* address.

Returns a `Server` object.

Arguments:

* *protocol_factory* must be a callable returning a
  `protocol` implementation.

* The *host* parameter can be set to several types which determine where
  the server would be listening:

  - If *host* is a string, the TCP server is bound to a single network
    interface specified by *host*.

  - If *host* is a sequence of strings, the TCP server is bound to all
    network interfaces specified by the sequence.

  - If *host* is an empty string or `None`, all interfaces are
    assumed and a list of multiple sockets will be returned (most likely
    one for IPv4 and another one for IPv6).

* The *port* parameter can be set to specify which port the server should
  listen on. If `0` or `None` (the default), a random unused port will
  be selected (note that if *host* resolves to multiple network interfaces,
  a different random port will be selected for each interface).

* *family* can be set to either `socket.AF_INET` or
  `~socket.AF_INET6` to force the socket to use IPv4 or IPv6.
  If not set, the *family* will be determined from host name
  (defaults to `~socket.AF_UNSPEC`).

* *flags* is a bitmask for `getaddrinfo`.

* *sock* can optionally be specified in order to use a preexisting
  socket object. If specified, *host* and *port* must not be specified.

> **Note**
>
> The *sock* argument transfers ownership of the socket to the
> server created. To close the socket, call the server's
> `~asyncio.Server.close` method.
>

* *backlog* is the maximum number of queued connections passed to
  `~socket.socket.listen` (defaults to 100).

* *ssl* can be set to an `~ssl.SSLContext` instance to enable
  TLS over the accepted connections.

* *reuse_address* tells the kernel to reuse a local socket in
  `TIME_WAIT` state, without waiting for its natural timeout to
  expire. If not specified will automatically be set to `True` on
  Unix.

* *reuse_port* tells the kernel to allow this endpoint to be bound to the
  same port as other existing endpoints are bound to, so long as they all
  set this flag when being created. This option is not supported on
  Windows.

* *keep_alive* set to `True` keeps connections active by enabling the
  periodic transmission of messages.

> *Changed in 3.13*: Added the *keep_alive* parameter.

* *ssl_handshake_timeout* is (for a TLS server) the time in seconds to wait
  for the TLS handshake to complete before aborting the connection.
  `60.0` seconds if `None` (default).

* *ssl_shutdown_timeout* is the time in seconds to wait for the SSL shutdown
  to complete before aborting the connection. `30.0` seconds if `None`
  (default).

* *start_serving* set to `True` (the default) causes the created server
  to start accepting connections immediately.  When set to `False`,
  the user should await on `Server.start_serving` or
  `Server.serve_forever` to make the server to start accepting
  connections.

> *Changed in 3.5*: Added support for SSL/TLS in :class:`ProactorEventLoop`.

> *Changed in 3.5.1*: The *host* parameter can be a sequence of strings.

> *Changed in 3.6*: Added *ssl_handshake_timeout* and *start_serving* parameters. The socket option :ref:`socket.TCP_NODELAY <socket-unix-constants>` is set by default for all TCP connections.

> *Changed in 3.11*: Added the *ssl_shutdown_timeout* parameter.

> **Seealso**
>
> The `start_server` function is a higher-level alternative API
> that returns a pair of `StreamReader` and `StreamWriter`
> that can be used in an async/await code.
>
