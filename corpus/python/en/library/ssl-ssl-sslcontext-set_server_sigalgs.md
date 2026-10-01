---
id: "python-en-function-ssl-sslcontext-set_server_sigalgs"
language: "python"
lang: "en"
category: "function"
name: "SSLContext.set_server_sigalgs"
signature: "SSLContext.set_server_sigalgs(sigalgs, /)"
directive: "method"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLContext.set_server_sigalgs"
license: "PSF"
updated: "2026-10-01"
---

# SSLContext.set_server_sigalgs

Set the signature algorithms allowed for the server to complete the TLS
handshake. It should be a string in the `OpenSSL sigalgs list format
<https://docs.openssl.org/master/man3/SSL_CTX_set1_sigalgs_list/>`_.

> **Note**
>
> When connected, the `SSLSocket.server_sigalg` method of SSL
> sockets will return the signature algorithm used by the server to
> complete the TLS handshake on that connection.
>

> *Added in 3.15*
