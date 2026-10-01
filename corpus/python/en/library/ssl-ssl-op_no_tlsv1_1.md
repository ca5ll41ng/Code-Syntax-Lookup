---
id: "python-en-function-ssl-op_no_tlsv1_1"
language: "python"
lang: "en"
category: "function"
name: "OP_NO_TLSv1_1"
directive: "data"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.OP_NO_TLSv1_1"
license: "PSF"
updated: "2026-10-01"
---

# OP_NO_TLSv1_1

Prevents a TLSv1.1 connection. This option is only applicable in conjunction
with `PROTOCOL_TLS`. It prevents the peers from choosing TLSv1.1 as
the protocol version. Available only with openssl version 1.0.1+.

> *Added in 3.4*

> *Deprecated since 3.7*: The option is deprecated since OpenSSL 1.1.0.
