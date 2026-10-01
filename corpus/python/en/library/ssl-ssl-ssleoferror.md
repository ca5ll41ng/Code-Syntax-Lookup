---
id: "python-en-function-ssl-ssleoferror"
language: "python"
lang: "en"
category: "function"
name: "SSLEOFError"
directive: "exception"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLEOFError"
license: "PSF"
updated: "2026-10-01"
---

# SSLEOFError

A subclass of `SSLError` raised when the SSL connection has been
terminated abruptly.  Generally, you shouldn't try to reuse the underlying
transport when this error is encountered.

> *Added in 3.3*
