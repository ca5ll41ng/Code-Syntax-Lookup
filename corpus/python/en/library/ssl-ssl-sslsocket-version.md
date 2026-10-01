---
id: "python-en-function-ssl-sslsocket-version"
language: "python"
lang: "en"
category: "function"
name: "SSLSocket.version"
signature: "SSLSocket.version()"
directive: "method"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLSocket.version"
license: "PSF"
updated: "2026-10-01"
---

# SSLSocket.version

Return the actual SSL protocol version negotiated by the connection
as a string, or `None` if no secure connection is established.
As of this writing, possible return values include `"SSLv2"`,
`"SSLv3"`, `"TLSv1"`, `"TLSv1.1"` and `"TLSv1.2"`.
Recent OpenSSL versions may define more return values.

> *Added in 3.5*
