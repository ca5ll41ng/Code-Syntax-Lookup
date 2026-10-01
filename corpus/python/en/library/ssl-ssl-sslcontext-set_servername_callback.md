---
id: "python-en-function-ssl-sslcontext-set_servername_callback"
language: "python"
lang: "en"
category: "function"
name: "SSLContext.set_servername_callback"
signature: "SSLContext.set_servername_callback(server_name_callback)"
directive: "method"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLContext.set_servername_callback"
license: "PSF"
updated: "2026-10-01"
---

# SSLContext.set_servername_callback

This is a legacy API retained for backwards compatibility. When possible,
you should use `sni_callback` instead. The given *server_name_callback*
is similar to *sni_callback*, except that when the server hostname is an
IDN-encoded internationalized domain name, the *server_name_callback*
receives a decoded U-label (`"pythön.org"`).

If there is a decoding error on the server name, the TLS connection will
terminate with an `ALERT_DESCRIPTION_INTERNAL_ERROR` fatal TLS
alert message to the client.

> *Added in 3.4*
