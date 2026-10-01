---
id: "python-en-function-ssl-sslcontext-set_ciphers"
language: "python"
lang: "en"
category: "function"
name: "SSLContext.set_ciphers"
signature: "SSLContext.set_ciphers(ciphers, /)"
directive: "method"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLContext.set_ciphers"
license: "PSF"
updated: "2026-10-01"
---

# SSLContext.set_ciphers

Set the allowed ciphers for sockets created with this context when
connecting using TLS 1.2 and earlier.  The *ciphers* argument should
be a string in the `OpenSSL cipher list format
<https://docs.openssl.org/master/man1/ciphers/>`_.
To set allowed TLS 1.3 ciphers, use `SSLContext.set_ciphersuites`.

If no cipher can be selected (because compile-time options or other
configuration forbids use of all the specified ciphers), an
`SSLError` will be raised.

> **Note**
>
> When connected, the `SSLSocket.cipher` method of SSL sockets will
> return details about the negotiated cipher.
>
