---
id: "python-en-function-asyncio-eventloop-loop-sock_recvfrom"
language: "python"
lang: "en"
category: "function"
name: "loop.sock_recvfrom"
signature: "loop.sock_recvfrom(sock, bufsize)"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.sock_recvfrom"
license: "PSF"
updated: "2026-10-01"
---

# loop.sock_recvfrom

Receive a datagram of up to *bufsize* from *sock*.  Asynchronous version of
`socket.recvfrom()`.

Return a tuple of (received data, remote address).

*sock* must be a non-blocking socket.

> *Added in 3.11*
