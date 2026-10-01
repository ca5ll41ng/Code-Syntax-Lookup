---
id: "python-en-function-ssl-sslcontext-post_handshake_auth"
language: "python"
lang: "en"
category: "function"
name: "SSLContext.post_handshake_auth"
directive: "attribute"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLContext.post_handshake_auth"
license: "PSF"
updated: "2026-10-01"
---

# SSLContext.post_handshake_auth

Enable TLS 1.3 post-handshake client authentication. Post-handshake auth
is disabled by default and a server can only request a TLS client
certificate during the initial handshake. When enabled, a server may
request a TLS client certificate at any time after the handshake.

When enabled on client-side sockets, the client signals the server that
it supports post-handshake authentication.

When enabled on server-side sockets, `SSLContext.verify_mode` must
be set to `CERT_OPTIONAL` or `CERT_REQUIRED`, too. The
actual client cert exchange is delayed until
`SSLSocket.verify_client_post_handshake` is called and some I/O is
performed.

> *Added in 3.8*
