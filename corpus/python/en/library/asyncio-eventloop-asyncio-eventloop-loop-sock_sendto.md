---
id: "python-en-function-asyncio-eventloop-loop-sock_sendto"
language: "python"
lang: "en"
category: "function"
name: "loop.sock_sendto"
signature: "loop.sock_sendto(sock, data, address)"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.sock_sendto"
license: "PSF"
updated: "2026-10-01"
---

# loop.sock_sendto

Send a datagram from *sock* to *address*.
Asynchronous version of
`socket.sendto()`.

Return the number of bytes sent.

*sock* must be a non-blocking socket.

> *Added in 3.11*
