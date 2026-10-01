---
id: "python-zh-function-ssl-op_enable_ktls"
language: "python"
lang: "zh"
category: "function"
name: "OP_ENABLE_KTLS"
directive: "data"
module: "ssl"
source_url: "https://docs.python.org/zh-cn/3/library/ssl.html#ssl.OP_ENABLE_KTLS"
license: "PSF"
updated: "2026-10-01"
---

# OP_ENABLE_KTLS

Enable the use of the kernel TLS. To benefit from the feature, OpenSSL must
have been compiled with support for it, and the negotiated cipher suites and
extensions must be supported by it (a list of supported ones may vary by
platform and kernel version).

Note that with enabled kernel TLS some cryptographic operations are
performed by the kernel directly and not via any available OpenSSL
Providers. This might be undesirable if, for example, the application
requires all cryptographic operations to be performed by the FIPS provider.

此选项仅适用于 OpenSSL 3.0.0 及更新的版本。

> *Added in 3.12*
