---
id: "python-en-function-ssl-sslcontext-set_alpn_protocols"
language: "python"
lang: "en"
category: "function"
name: "SSLContext.set_alpn_protocols"
signature: "SSLContext.set_alpn_protocols(alpn_protocols)"
directive: "method"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLContext.set_alpn_protocols"
license: "PSF"
updated: "2026-10-01"
---

# SSLContext.set_alpn_protocols

Specify which protocols the socket should advertise during the SSL/TLS
handshake. It should be a list of ASCII strings, like `['http/1.1',
'spdy/2']`, ordered by preference. The selection of a protocol will happen
during the handshake, and will play out according to RFC 7301. After a
successful handshake, the `SSLSocket.selected_alpn_protocol` method will
return the agreed-upon protocol.

This method will raise `NotImplementedError` if `HAS_ALPN` is
`False`.

> *Added in 3.5*
