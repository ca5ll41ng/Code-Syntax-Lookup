---
id: "python-en-function-ssl-sslsocket-unwrap"
language: "python"
lang: "en"
category: "function"
name: "SSLSocket.unwrap"
signature: "SSLSocket.unwrap()"
directive: "method"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLSocket.unwrap"
license: "PSF"
updated: "2026-10-01"
---

# SSLSocket.unwrap

Performs the SSL shutdown handshake, which removes the TLS layer from the
underlying socket, and returns the underlying socket object.  This can be
used to go from encrypted operation over a connection to unencrypted.  The
returned socket should always be used for further communication with the
other side of the connection, rather than the original socket.
