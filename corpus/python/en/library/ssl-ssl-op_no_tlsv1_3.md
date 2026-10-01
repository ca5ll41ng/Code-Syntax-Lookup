---
id: "python-en-function-ssl-op_no_tlsv1_3"
language: "python"
lang: "en"
category: "function"
name: "OP_NO_TLSv1_3"
directive: "data"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.OP_NO_TLSv1_3"
license: "PSF"
updated: "2026-10-01"
---

# OP_NO_TLSv1_3

Prevents a TLSv1.3 connection. This option is only applicable in conjunction
with `PROTOCOL_TLS`. It prevents the peers from choosing TLSv1.3 as
the protocol version. TLS 1.3 is available with OpenSSL 1.1.1 or later.
When Python has been compiled against an older version of OpenSSL, the
flag defaults to *0*.

> *Added in 3.6.3*

> *Deprecated since 3.7*: The option is deprecated since OpenSSL 1.1.0. It was added to 2.7.15 and 3.6.3 for backwards compatibility with OpenSSL 1.0.2.
