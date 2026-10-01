---
id: "python-en-function-ssl-sslsocket-selected_alpn_protocol"
language: "python"
lang: "en"
category: "function"
name: "SSLSocket.selected_alpn_protocol"
signature: "SSLSocket.selected_alpn_protocol()"
directive: "method"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLSocket.selected_alpn_protocol"
license: "PSF"
updated: "2026-10-01"
---

# SSLSocket.selected_alpn_protocol

Return the protocol that was selected during the TLS handshake.  If
`SSLContext.set_alpn_protocols` was not called, if the other party does
not support ALPN, if this socket does not support any of the client's
proposed protocols, or if the handshake has not happened yet, `None` is
returned.

> *Added in 3.5*
