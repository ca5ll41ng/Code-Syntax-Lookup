---
id: "python-en-function-asyncio-eventloop-server"
language: "python"
lang: "en"
category: "function"
name: "Server"
directive: "class"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/3/library/asyncio-eventloop.html#asyncio-eventloop.Server"
license: "PSF"
updated: "2026-10-01"
---

# Server

*Server* objects are asynchronous context managers.  When used in an
`async with` statement, it's guaranteed that the Server object is
closed and not accepting new connections when the `async with`
statement is completed::

   srv = await loop.create_server(...)

   async with srv:
       # some code

   # At this point, srv is closed and no longer accepts new connections.

> *Changed in 3.7*: Server object is an asynchronous context manager since Python 3.7.

> *Changed in 3.11*: This class was exposed publicly as ``asyncio.Server`` in Python 3.9.11, 3.10.3 and 3.11.

method:: close()

method:: close_clients()

method:: abort_clients()

method:: get_loop()

method:: start_serving()

method:: serve_forever()

method:: is_serving()

method:: wait_closed()

attribute:: sockets
