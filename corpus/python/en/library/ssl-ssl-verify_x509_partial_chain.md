---
id: "python-en-function-ssl-verify_x509_partial_chain"
language: "python"
lang: "en"
category: "function"
name: "VERIFY_X509_PARTIAL_CHAIN"
directive: "data"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.VERIFY_X509_PARTIAL_CHAIN"
license: "PSF"
updated: "2026-10-01"
---

# VERIFY_X509_PARTIAL_CHAIN

Possible value for `SSLContext.verify_flags`. It instructs OpenSSL to
accept intermediate CAs in the trust store to be treated as trust-anchors,
in the same way as the self-signed root CA certificates. This makes it
possible to trust certificates issued by an intermediate CA without having
to trust its ancestor root CA.

> *Added in 3.10*
