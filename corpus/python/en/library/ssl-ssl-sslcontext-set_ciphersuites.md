---
id: "python-en-function-ssl-sslcontext-set_ciphersuites"
language: "python"
lang: "en"
category: "function"
name: "SSLContext.set_ciphersuites"
signature: "SSLContext.set_ciphersuites(ciphersuites, /)"
directive: "method"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLContext.set_ciphersuites"
license: "PSF"
updated: "2026-10-01"
---

# SSLContext.set_ciphersuites

Set the allowed ciphers for sockets created with this context when
connecting using TLS 1.3.  The *ciphersuites* argument should be a
colon-separate string of TLS 1.3 cipher names.  If no cipher can be
selected (because compile-time options or other configuration forbids
use of all the specified ciphers), an `SSLError` will be raised.

> **Note**
>
> When connected, the `SSLSocket.cipher` method of SSL sockets will
> return details about the negotiated cipher.
>

> *Added in 3.15*
