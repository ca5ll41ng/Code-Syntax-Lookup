---
id: "python-en-function-ssl-openssl_version_info"
language: "python"
lang: "en"
category: "function"
name: "OPENSSL_VERSION_INFO"
directive: "data"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.OPENSSL_VERSION_INFO"
license: "PSF"
updated: "2026-10-01"
---

# OPENSSL_VERSION_INFO

A named tuple of five integers representing version information about the
OpenSSL library loaded by the interpreter:
*major*, *minor*, *fix*, *patch* and *status*::

 >>> ssl.OPENSSL_VERSION_INFO
 ssl.OPENSSL_VERSION_INFO(major=3, minor=0, fix=0, patch=13, status=0)

> *Added in 3.2*

> *Changed in next*: It is now a named tuple.
