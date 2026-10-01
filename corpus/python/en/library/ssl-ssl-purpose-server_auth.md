---
id: "python-en-function-ssl-purpose-server_auth"
language: "python"
lang: "en"
category: "function"
name: "Purpose.SERVER_AUTH"
directive: "data"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.Purpose.SERVER_AUTH"
license: "PSF"
updated: "2026-10-01"
---

# Purpose.SERVER_AUTH

Option for `create_default_context` and
`SSLContext.load_default_certs`.  This value indicates that the
context may be used to authenticate web servers (therefore, it will
be used to create client-side sockets).

> *Added in 3.4*
