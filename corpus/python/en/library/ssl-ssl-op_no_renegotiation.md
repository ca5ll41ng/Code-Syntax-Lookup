---
id: "python-en-function-ssl-op_no_renegotiation"
language: "python"
lang: "en"
category: "function"
name: "OP_NO_RENEGOTIATION"
directive: "data"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.OP_NO_RENEGOTIATION"
license: "PSF"
updated: "2026-10-01"
---

# OP_NO_RENEGOTIATION

Disable all renegotiation in TLSv1.2 and earlier. Do not send
HelloRequest messages, and ignore renegotiation requests via ClientHello.

This option is only available with OpenSSL 1.1.0h and later.

> *Added in 3.7*
