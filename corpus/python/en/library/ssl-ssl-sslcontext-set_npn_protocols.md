---
id: "python-en-function-ssl-sslcontext-set_npn_protocols"
language: "python"
lang: "en"
category: "function"
name: "SSLContext.set_npn_protocols"
signature: "SSLContext.set_npn_protocols(npn_protocols)"
directive: "method"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLContext.set_npn_protocols"
license: "PSF"
updated: "2026-10-01"
---

# SSLContext.set_npn_protocols

Specify which protocols the socket should advertise during the SSL/TLS
handshake. It should be a list of strings, like `['http/1.1', 'spdy/2']`,
ordered by preference. The selection of a protocol will happen during the
handshake, and will play out according to the `Application Layer Protocol Negotiation
<https://en.wikipedia.org/wiki/Application-Layer_Protocol_Negotiation>`_. After a
successful handshake, the `SSLSocket.selected_npn_protocol` method will
return the agreed-upon protocol.

This method will raise `NotImplementedError` if `HAS_NPN` is
`False`.

> *Added in 3.3*

> *Deprecated since 3.10*: NPN has been superseded by ALPN
