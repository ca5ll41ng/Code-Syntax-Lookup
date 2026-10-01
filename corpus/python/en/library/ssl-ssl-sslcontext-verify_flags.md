---
id: "python-en-function-ssl-sslcontext-verify_flags"
language: "python"
lang: "en"
category: "function"
name: "SSLContext.verify_flags"
directive: "attribute"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLContext.verify_flags"
license: "PSF"
updated: "2026-10-01"
---

# SSLContext.verify_flags

The flags for certificate verification operations. You can set flags like
`VERIFY_CRL_CHECK_LEAF` by ORing them together. By default OpenSSL
does neither require nor verify certificate revocation lists (CRLs).

> *Added in 3.4*

> *Changed in 3.6*: :attr:`SSLContext.verify_flags` returns :class:`VerifyFlags` flags:     >>> ssl.create_default_context().verify_flags  # doctest: +SKIP    <VerifyFlags.VERIFY_X509_TRUSTED_FIRST: 32768>
