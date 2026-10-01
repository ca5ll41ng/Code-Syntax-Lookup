---
id: "python-zh-function-asyncio-eventloop-loop-sock_connect"
language: "python"
lang: "zh"
category: "function"
name: "loop.sock_connect"
signature: "loop.sock_connect(sock, address)"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.sock_connect"
license: "PSF"
updated: "2026-10-01"
---

# loop.sock_connect

将 *sock* 连接到位于 *address* 的远程套接字。

:meth:`socket.connect() <socket.socket.connect>` 的异步版本。

*sock* 必须是个非阻塞套接字。

With `SelectorEventLoop`, *address* does not need to be resolved:
for `~socket.AF_INET` and `~socket.AF_INET6` sockets,
`sock_connect` first checks whether *address* is already resolved by
calling `socket.inet_pton`, and uses `loop.getaddrinfo` to
resolve it if it is not.

`ProactorEventLoop`, the default event loop on Windows, does not
resolve *address*.  The host must already be a numeric IP address; passing
a host name raises `OSError`.  Resolve the address with
`loop.getaddrinfo` first, or use `loop.create_connection`,
which resolves the address on every platform.

> *Changed in 3.5.2*: With :class:`SelectorEventLoop`, ``address`` no longer needs to be resolved.

> **Seealso**
>
> `loop.create_connection`
> and  `asyncio.open_connection()`.
>
