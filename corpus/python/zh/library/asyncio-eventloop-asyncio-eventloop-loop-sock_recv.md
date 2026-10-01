---
id: "python-zh-function-asyncio-eventloop-loop-sock_recv"
language: "python"
lang: "zh"
category: "function"
name: "loop.sock_recv"
signature: "loop.sock_recv(sock, nbytes)"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.sock_recv"
license: "PSF"
updated: "2026-10-01"
---

# loop.sock_recv

Receive up to *nbytes* from *sock*.  Asynchronous version of
`socket.recv()`.

返回接收到的数据（bytes 对象）。

*sock* 必须是个非阻塞套接字。

> *Changed in 3.7*: Even though this method was always documented as a coroutine method, releases before Python 3.7 returned a :class:`Future`. Since Python 3.7 this is an ``async def`` method.
