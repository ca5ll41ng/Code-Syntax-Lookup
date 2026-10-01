---
id: "python-en-function-ssl-sslwantreaderror"
language: "python"
lang: "en"
category: "function"
name: "SSLWantReadError"
directive: "exception"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLWantReadError"
license: "PSF"
updated: "2026-10-01"
---

# SSLWantReadError

A subclass of `SSLError` raised by a `non-blocking SSL socket` when trying to read or write data, but more data needs
to be received on the underlying TCP transport before the request can be
fulfilled.

> *Added in 3.3*
