---
id: "python-en-function-ssl-op_no_tlsv1"
language: "python"
lang: "en"
category: "function"
name: "OP_NO_TLSv1"
directive: "data"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.OP_NO_TLSv1"
license: "PSF"
updated: "2026-10-01"
---

# OP_NO_TLSv1

Prevents a TLSv1 connection.  This option is only applicable in
conjunction with `PROTOCOL_TLS`.  It prevents the peers from
choosing TLSv1 as the protocol version.

> *Added in 3.2*

> *Deprecated since 3.7*: The option is deprecated since OpenSSL 1.1.0, use the new :attr:`SSLContext.minimum_version` and :attr:`SSLContext.maximum_version` instead.
