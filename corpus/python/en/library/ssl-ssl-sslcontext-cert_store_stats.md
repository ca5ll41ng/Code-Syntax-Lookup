---
id: "python-en-function-ssl-sslcontext-cert_store_stats"
language: "python"
lang: "en"
category: "function"
name: "SSLContext.cert_store_stats"
signature: "SSLContext.cert_store_stats()"
directive: "method"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLContext.cert_store_stats"
license: "PSF"
updated: "2026-10-01"
---

# SSLContext.cert_store_stats

Get statistics about quantities of loaded X.509 certificates, count of
X.509 certificates flagged as CA certificates and certificate revocation
lists as dictionary.

Example for a context with one CA cert and one other cert::

   >>> context.cert_store_stats()
   {'crl': 0, 'x509_ca': 1, 'x509': 2}

> *Added in 3.4*
