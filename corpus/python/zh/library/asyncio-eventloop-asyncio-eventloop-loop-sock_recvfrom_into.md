---
id: "python-zh-function-asyncio-eventloop-loop-sock_recvfrom_into"
language: "python"
lang: "zh"
category: "function"
name: "loop.sock_recvfrom_into"
signature: "loop.sock_recvfrom_into(sock, buf, nbytes=0)"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.sock_recvfrom_into"
license: "PSF"
updated: "2026-10-01"
---

# loop.sock_recvfrom_into

Receive a datagram of up to *nbytes* from *sock* into *buf*.
Asynchronous version of
`socket.recvfrom_into()`.

返回一个 (已接收字节数，远程地址) 元组。

*sock* 必须是个非阻塞套接字。

> *Added in 3.11*
