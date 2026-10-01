---
id: "python-zh-function-ssl-cert_none"
language: "python"
lang: "zh"
category: "function"
name: "CERT_NONE"
directive: "data"
module: "ssl"
source_url: "https://docs.python.org/zh-cn/3/library/ssl.html#ssl.CERT_NONE"
license: "PSF"
updated: "2026-10-01"
---

# CERT_NONE

Possible value for `SSLContext.verify_mode`.
Except for `PROTOCOL_TLS_CLIENT`,
it is the default mode.  With client-side sockets, just about any
cert is accepted.  Validation errors, such as untrusted or expired cert,
are ignored and do not abort the TLS/SSL handshake.

In server mode, no certificate is requested from the client, so the client
does not send any for client cert authentication.

参见下文对于 :ref:`ssl-security` 的讨论。
