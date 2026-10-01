---
id: "python-zh-function-asyncio-eventloop-loop-sock_recv_into"
language: "python"
lang: "zh"
category: "function"
name: "loop.sock_recv_into"
signature: "loop.sock_recv_into(sock, buf)"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.sock_recv_into"
license: "PSF"
updated: "2026-10-01"
---

# loop.sock_recv_into

Receive data from *sock* into the *buf* buffer.  Modeled after the blocking
`socket.recv_into()` method.

返回写入缓冲区的字节数。

*sock* 必须是个非阻塞套接字。

> *Added in 3.7*
