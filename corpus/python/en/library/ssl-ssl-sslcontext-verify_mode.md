---
id: "python-en-function-ssl-sslcontext-verify_mode"
language: "python"
lang: "en"
category: "function"
name: "SSLContext.verify_mode"
directive: "attribute"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLContext.verify_mode"
license: "PSF"
updated: "2026-10-01"
---

# SSLContext.verify_mode

Whether to try to verify other peers' certificates and how to behave
if verification fails.  This attribute must be one of
`CERT_NONE`, `CERT_OPTIONAL` or `CERT_REQUIRED`.

> *Changed in 3.6*: :attr:`SSLContext.verify_mode` returns :class:`VerifyMode` enum:     >>> ssl.create_default_context().verify_mode  # doctest: +SKIP    <VerifyMode.CERT_REQUIRED: 2>
