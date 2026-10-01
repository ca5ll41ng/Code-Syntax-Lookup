---
id: "python-en-function-asyncio-eventloop-loop-sock_recv_into"
language: "python"
lang: "en"
category: "function"
name: "loop.sock_recv_into"
signature: "loop.sock_recv_into(sock, buf)"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.sock_recv_into"
license: "PSF"
updated: "2026-10-01"
---

# loop.sock_recv_into

Receive data from *sock* into the *buf* buffer.  Modeled after the blocking
`socket.recv_into()` method.

Return the number of bytes written to the buffer.

*sock* must be a non-blocking socket.

> *Added in 3.7*
