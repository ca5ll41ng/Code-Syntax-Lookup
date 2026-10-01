---
id: "python-en-function-ssl-sslsocket-selected_npn_protocol"
language: "python"
lang: "en"
category: "function"
name: "SSLSocket.selected_npn_protocol"
signature: "SSLSocket.selected_npn_protocol()"
directive: "method"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLSocket.selected_npn_protocol"
license: "PSF"
updated: "2026-10-01"
---

# SSLSocket.selected_npn_protocol

Return the higher-level protocol that was selected during the TLS/SSL
handshake. If `SSLContext.set_npn_protocols` was not called, or
if the other party does not support NPN, or if the handshake has not yet
happened, this will return `None`.

> *Added in 3.3*

> *Deprecated since 3.10*: NPN has been superseded by ALPN
