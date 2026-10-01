---
id: "python-zh-function-asyncio-eventloop-loop-sock_recvfrom"
language: "python"
lang: "zh"
category: "function"
name: "loop.sock_recvfrom"
signature: "loop.sock_recvfrom(sock, bufsize)"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.sock_recvfrom"
license: "PSF"
updated: "2026-10-01"
---

# loop.sock_recvfrom

Receive a datagram of up to *bufsize* from *sock*.  Asynchronous version of
`socket.recvfrom()`.

返回一个 (已接收数据，远程地址) 元组。

*sock* 必须是个非阻塞套接字。

> *Added in 3.11*
