---
id: "python-en-function-asyncio-eventloop-loop-sock_connect"
language: "python"
lang: "en"
category: "function"
name: "loop.sock_connect"
signature: "loop.sock_connect(sock, address)"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.sock_connect"
license: "PSF"
updated: "2026-10-01"
---

# loop.sock_connect

Connect *sock* to a remote socket at *address*.

Asynchronous version of `socket.connect()`.

*sock* must be a non-blocking socket.

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
