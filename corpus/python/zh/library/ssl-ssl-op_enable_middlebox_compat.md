---
id: "python-zh-function-ssl-op_enable_middlebox_compat"
language: "python"
lang: "zh"
category: "function"
name: "OP_ENABLE_MIDDLEBOX_COMPAT"
directive: "data"
module: "ssl"
source_url: "https://docs.python.org/zh-cn/3/library/ssl.html#ssl.OP_ENABLE_MIDDLEBOX_COMPAT"
license: "PSF"
updated: "2026-10-01"
---

# OP_ENABLE_MIDDLEBOX_COMPAT

Send dummy Change Cipher Spec (CCS) messages in TLS 1.3 handshake to make
a TLS 1.3 connection look more like a TLS 1.2 connection.

此选项仅适用于 OpenSSL 1.1.1 及更新的版本。

> *Added in 3.8*
