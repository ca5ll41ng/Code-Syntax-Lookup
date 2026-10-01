---
id: "python-en-function-ssl-protocol_tls"
language: "python"
lang: "en"
category: "function"
name: "PROTOCOL_TLS"
directive: "data"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.PROTOCOL_TLS"
license: "PSF"
updated: "2026-10-01"
---

# PROTOCOL_TLS

Selects the highest protocol version that both the client and server support.
Despite the name, this option can select both "SSL" and "TLS" protocols.

> *Added in 3.6*

> *Deprecated since 3.10*: TLS clients and servers require different default settings for secure communication. The generic TLS protocol constant is deprecated in favor of :data:`PROTOCOL_TLS_CLIENT` and :data:`PROTOCOL_TLS_SERVER`.
