---
id: "python-en-function-ssl-purpose-client_auth"
language: "python"
lang: "en"
category: "function"
name: "Purpose.CLIENT_AUTH"
directive: "data"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.Purpose.CLIENT_AUTH"
license: "PSF"
updated: "2026-10-01"
---

# Purpose.CLIENT_AUTH

Option for `create_default_context` and
`SSLContext.load_default_certs`.  This value indicates that the
context may be used to authenticate web clients (therefore, it will
be used to create server-side sockets).

> *Added in 3.4*
