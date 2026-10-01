---
id: "python-zh-function-ssl-protocol_sslv3"
language: "python"
lang: "zh"
category: "function"
name: "PROTOCOL_SSLv3"
directive: "data"
module: "ssl"
source_url: "https://docs.python.org/zh-cn/3/library/ssl.html#ssl.PROTOCOL_SSLv3"
license: "PSF"
updated: "2026-10-01"
---

# PROTOCOL_SSLv3

选择 SSL 版本 3 作为通道加密协议。

This protocol is not available if OpenSSL is compiled with the
`no-ssl3` option.

> **Warning**
>
> SSL 版本 3 并不安全。极不建议使用它。
>

> *Deprecated since 3.6*: OpenSSL has deprecated all version specific protocols. Use the default protocol :data:`PROTOCOL_TLS_SERVER` or :data:`PROTOCOL_TLS_CLIENT` with :attr:`SSLContext.minimum_version` and :attr:`SSLContext.maximum_version` instead.
