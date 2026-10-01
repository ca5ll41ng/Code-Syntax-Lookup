---
id: "python-en-function-ssl-sslsocket-shared_ciphers"
language: "python"
lang: "en"
category: "function"
name: "SSLSocket.shared_ciphers"
signature: "SSLSocket.shared_ciphers()"
directive: "method"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLSocket.shared_ciphers"
license: "PSF"
updated: "2026-10-01"
---

# SSLSocket.shared_ciphers

Return the list of ciphers available in both the client and server.  Each
entry of the returned list is a three-value tuple containing the name of the
cipher, the version of the SSL protocol that defines its use, and the number
of secret bits the cipher uses.  `~SSLSocket.shared_ciphers` returns
`None` if no connection has been established or the socket is a client
socket.

> *Added in 3.5*
