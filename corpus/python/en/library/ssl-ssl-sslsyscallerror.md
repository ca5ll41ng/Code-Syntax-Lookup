---
id: "python-en-function-ssl-sslsyscallerror"
language: "python"
lang: "en"
category: "function"
name: "SSLSyscallError"
directive: "exception"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLSyscallError"
license: "PSF"
updated: "2026-10-01"
---

# SSLSyscallError

A subclass of `SSLError` raised when a system error was encountered
while trying to fulfill an operation on a SSL socket.  Unfortunately,
there is no easy way to inspect the original errno number.

> *Added in 3.3*
