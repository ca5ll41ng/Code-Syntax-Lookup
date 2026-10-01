---
id: "python-en-function-asyncio-eventloop-loop-sock_recvfrom_into"
language: "python"
lang: "en"
category: "function"
name: "loop.sock_recvfrom_into"
signature: "loop.sock_recvfrom_into(sock, buf, nbytes=0)"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.sock_recvfrom_into"
license: "PSF"
updated: "2026-10-01"
---

# loop.sock_recvfrom_into

Receive a datagram of up to *nbytes* from *sock* into *buf*.
Asynchronous version of
`socket.recvfrom_into()`.

Return a tuple of (number of bytes received, remote address).

*sock* must be a non-blocking socket.

> *Added in 3.11*
