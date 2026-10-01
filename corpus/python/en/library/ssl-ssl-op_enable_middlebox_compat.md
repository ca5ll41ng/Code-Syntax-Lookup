---
id: "python-en-function-ssl-op_enable_middlebox_compat"
language: "python"
lang: "en"
category: "function"
name: "OP_ENABLE_MIDDLEBOX_COMPAT"
directive: "data"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.OP_ENABLE_MIDDLEBOX_COMPAT"
license: "PSF"
updated: "2026-10-01"
---

# OP_ENABLE_MIDDLEBOX_COMPAT

Send dummy Change Cipher Spec (CCS) messages in TLS 1.3 handshake to make
a TLS 1.3 connection look more like a TLS 1.2 connection.

This option is only available with OpenSSL 1.1.1 and later.

> *Added in 3.8*
