---
id: "python-en-function-asyncio-eventloop-loop-sock_accept"
language: "python"
lang: "en"
category: "function"
name: "loop.sock_accept"
signature: "loop.sock_accept(sock)"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.sock_accept"
license: "PSF"
updated: "2026-10-01"
---

# loop.sock_accept

Accept a connection.  Modeled after the blocking
`socket.accept()` method.

The socket must be bound to an address and listening
for connections. The return value is a pair `(conn, address)` where *conn*
is a *new* socket object usable to send and receive data on the connection,
and *address* is the address bound to the socket on the other end of the
connection.

*sock* must be a non-blocking socket.

> *Changed in 3.7*: Even though the method was always documented as a coroutine method, before Python 3.7 it returned a :class:`Future`. Since Python 3.7, this is an ``async def`` method.

> **Seealso**
>
> `loop.create_server` and `start_server`.
>
