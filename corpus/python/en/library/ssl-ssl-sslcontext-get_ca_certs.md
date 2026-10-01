---
id: "python-en-function-ssl-sslcontext-get_ca_certs"
language: "python"
lang: "en"
category: "function"
name: "SSLContext.get_ca_certs"
signature: "SSLContext.get_ca_certs(binary_form=False)"
directive: "method"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLContext.get_ca_certs"
license: "PSF"
updated: "2026-10-01"
---

# SSLContext.get_ca_certs

Get a list of loaded "certification authority" (CA) certificates. If the
`binary_form` parameter is `False` each list
entry is a dict like the output of `SSLSocket.getpeercert`. Otherwise
the method returns a list of DER-encoded certificates. The returned list
does not contain certificates from *capath* unless a certificate was
requested and loaded by a SSL connection.

> **Note**
>
> Certificates in a capath directory aren't loaded unless they have
> been used at least once.
>

> *Added in 3.4*
