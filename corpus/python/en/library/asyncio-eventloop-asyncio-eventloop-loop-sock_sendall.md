---
id: "python-en-function-asyncio-eventloop-loop-sock_sendall"
language: "python"
lang: "en"
category: "function"
name: "loop.sock_sendall"
signature: "loop.sock_sendall(sock, data)"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.sock_sendall"
license: "PSF"
updated: "2026-10-01"
---

# loop.sock_sendall

Send *data* to the *sock* socket. Asynchronous version of
`socket.sendall()`.

This method continues to send to the socket until either all data
in *data* has been sent or an error occurs.  `None` is returned
on success.  On error, an exception is raised. Additionally, there is no way
to determine how much data, if any, was successfully processed by the
receiving end of the connection.

*sock* must be a non-blocking socket.

> *Changed in 3.7*: Even though the method was always documented as a coroutine method, before Python 3.7 it returned a :class:`Future`. Since Python 3.7, this is an ``async def`` method.
