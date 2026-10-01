---
id: "python-en-function-ssl-sslsocket-session"
language: "python"
lang: "en"
category: "function"
name: "SSLSocket.session"
directive: "attribute"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLSocket.session"
license: "PSF"
updated: "2026-10-01"
---

# SSLSocket.session

The `SSLSession` for this SSL connection. The session is available
for client and server side sockets after the TLS handshake has been
performed. For client sockets the session can be set before
`~SSLSocket.do_handshake` has been called to reuse a session.

> *Added in 3.6*
