---
id: "python-en-function-asyncio-eventloop-loop-start_tls-transport-protocol"
language: "python"
lang: "en"
category: "function"
name: "loop.start_tls(transport, protocol, \\"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.start_tls(transport, protocol, \\"
license: "PSF"
updated: "2026-10-01"
---

# loop.start_tls(transport, protocol, \

Upgrade an existing transport-based connection to TLS.

Create a TLS coder/decoder instance and insert it between the *transport*
and the *protocol*. The coder/decoder implements both *transport*-facing
protocol and *protocol*-facing transport.

Return the created two-interface instance. After *await*, the *protocol*
must stop using the original *transport* and communicate with the returned
object only because the coder caches *protocol*-side data and sporadically
exchanges extra TLS session packets with *transport*.

In some situations (e.g. when the passed transport is already closing) this
may return `None`.

Parameters:

* *transport* and *protocol* instances that methods like
  `~loop.create_server` and
  `~loop.create_connection` return.

* *sslcontext*: a configured instance of `~ssl.SSLContext`.

* *server_side* pass `True` when a server-side connection is being
  upgraded (like the one created by `~loop.create_server`).

* *server_hostname*: sets or overrides the host name that the target
  server's certificate will be matched against.

* *ssl_handshake_timeout* is (for a TLS connection) the time in seconds to
  wait for the TLS handshake to complete before aborting the connection.
  `60.0` seconds if `None` (default).

* *ssl_shutdown_timeout* is the time in seconds to wait for the SSL shutdown
  to complete before aborting the connection. `30.0` seconds if `None`
  (default).

> *Added in 3.7*

> *Changed in 3.11*: Added the *ssl_shutdown_timeout* parameter.
