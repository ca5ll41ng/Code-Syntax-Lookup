---
id: "python-en-function-ssl-sslwantwriteerror"
language: "python"
lang: "en"
category: "function"
name: "SSLWantWriteError"
directive: "exception"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLWantWriteError"
license: "PSF"
updated: "2026-10-01"
---

# SSLWantWriteError

A subclass of `SSLError` raised by a `non-blocking SSL socket` when trying to read or write data, but more data needs
to be sent on the underlying TCP transport before the request can be
fulfilled.

> *Added in 3.3*
