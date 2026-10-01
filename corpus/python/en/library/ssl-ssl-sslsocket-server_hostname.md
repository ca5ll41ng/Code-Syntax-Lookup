---
id: "python-en-function-ssl-sslsocket-server_hostname"
language: "python"
lang: "en"
category: "function"
name: "SSLSocket.server_hostname"
directive: "attribute"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLSocket.server_hostname"
license: "PSF"
updated: "2026-10-01"
---

# SSLSocket.server_hostname

Hostname of the server: `str` type, or `None` for server-side
socket or if the hostname was not specified in the constructor.

> *Added in 3.2*

> *Changed in 3.7*: The attribute is now always ASCII text. When ``server_hostname`` is an internationalized domain name (IDN), this attribute now stores the A-label form (``"xn--pythn-mua.org"``), rather than the U-label form (``"pythön.org"``).
