---
id: "python-en-function-ssl-sslzeroreturnerror"
language: "python"
lang: "en"
category: "function"
name: "SSLZeroReturnError"
directive: "exception"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLZeroReturnError"
license: "PSF"
updated: "2026-10-01"
---

# SSLZeroReturnError

A subclass of `SSLError` raised when trying to read or write and
the SSL connection has been closed cleanly.  Note that this doesn't
mean that the underlying transport (read TCP) has been closed.

> *Added in 3.3*
