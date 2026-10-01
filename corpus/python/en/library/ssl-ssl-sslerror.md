---
id: "python-en-function-ssl-sslerror"
language: "python"
lang: "en"
category: "function"
name: "SSLError"
directive: "exception"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLError"
license: "PSF"
updated: "2026-10-01"
---

# SSLError

Raised to signal an error from the underlying SSL implementation
(currently provided by the OpenSSL library).  This signifies some
problem in the higher-level encryption and authentication layer that's
superimposed on the underlying network connection.  This error
is a subtype of `OSError`.  The error code and message of
`SSLError` instances are provided by the OpenSSL library.

> *Changed in 3.3*: :exc:`SSLError` used to be a subtype of :exc:`socket.error`.

attribute:: library

attribute:: reason
