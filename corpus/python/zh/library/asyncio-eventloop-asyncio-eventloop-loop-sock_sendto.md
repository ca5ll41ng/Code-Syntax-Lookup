---
id: "python-zh-function-asyncio-eventloop-loop-sock_sendto"
language: "python"
lang: "zh"
category: "function"
name: "loop.sock_sendto"
signature: "loop.sock_sendto(sock, data, address)"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.sock_sendto"
license: "PSF"
updated: "2026-10-01"
---

# loop.sock_sendto

Send a datagram from *sock* to *address*.
Asynchronous version of
`socket.sendto()`.

返回已发送的字节数。

*sock* 必须是个非阻塞套接字。

> *Added in 3.11*
