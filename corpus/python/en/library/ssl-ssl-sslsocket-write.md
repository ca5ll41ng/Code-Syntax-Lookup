---
id: "python-en-function-ssl-sslsocket-write"
language: "python"
lang: "en"
category: "function"
name: "SSLSocket.write"
signature: "SSLSocket.write(data)"
directive: "method"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLSocket.write"
license: "PSF"
updated: "2026-10-01"
---

# SSLSocket.write

Write *data* to the SSL socket and return the number of bytes written. The
*data* argument must be an object supporting the buffer interface.

Raise `SSLWantReadError` or `SSLWantWriteError` if the socket is
`non-blocking` and the write would block.

As at any time a re-negotiation is possible, a call to `write` can
also cause read operations.

> *Changed in 3.5*: The socket timeout is no longer reset each time bytes are received or sent. The socket timeout is now the maximum total duration to write *data*.

> *Deprecated since 3.6*: Use :meth:`~SSLSocket.send` instead of :meth:`~SSLSocket.write`.
