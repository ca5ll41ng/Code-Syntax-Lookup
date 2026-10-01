---
id: "python-en-function-ssl-sslcontext-set_client_sigalgs"
language: "python"
lang: "en"
category: "function"
name: "SSLContext.set_client_sigalgs"
signature: "SSLContext.set_client_sigalgs(sigalgs, /)"
directive: "method"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLContext.set_client_sigalgs"
license: "PSF"
updated: "2026-10-01"
---

# SSLContext.set_client_sigalgs

Set the signature algorithms allowed for certificate-based client
authentication. It should be a string in the `OpenSSL client sigalgs
list format
<https://docs.openssl.org/master/man3/SSL_CTX_set1_client_sigalgs_list/>`_.

> **Note**
>
> When connected, the `SSLSocket.client_sigalg` method of SSL
> sockets will return the signature algorithm used for performing
> certificate-based client authentication on that connection.
>

> *Added in 3.15*
