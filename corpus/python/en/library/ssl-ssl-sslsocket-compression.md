---
id: "python-en-function-ssl-sslsocket-compression"
language: "python"
lang: "en"
category: "function"
name: "SSLSocket.compression"
signature: "SSLSocket.compression()"
directive: "method"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLSocket.compression"
license: "PSF"
updated: "2026-10-01"
---

# SSLSocket.compression

Return the compression algorithm being used as a string, or `None`
if the connection isn't compressed.

If the higher-level protocol supports its own compression mechanism,
you can use `OP_NO_COMPRESSION` to disable SSL-level compression.

> *Added in 3.3*
