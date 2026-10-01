---
id: "python-en-function-ssl-protocol_sslv3"
language: "python"
lang: "en"
category: "function"
name: "PROTOCOL_SSLv3"
directive: "data"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.PROTOCOL_SSLv3"
license: "PSF"
updated: "2026-10-01"
---

# PROTOCOL_SSLv3

Selects SSL version 3 as the channel encryption protocol.

This protocol is not available if OpenSSL is compiled with the
`no-ssl3` option.

> **Warning**
>
> SSL version 3 is insecure.  Its use is highly discouraged.
>

> *Deprecated since 3.6*: OpenSSL has deprecated all version specific protocols. Use the default protocol :data:`PROTOCOL_TLS_SERVER` or :data:`PROTOCOL_TLS_CLIENT` with :attr:`SSLContext.minimum_version` and :attr:`SSLContext.maximum_version` instead.
