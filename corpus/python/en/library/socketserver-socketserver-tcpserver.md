---
id: "python-en-function-socketserver-tcpserver"
language: "python"
lang: "en"
category: "function"
name: "TCPServer"
signature: "TCPServer(server_address, RequestHandlerClass, bind_and_activate=True)"
directive: "class"
module: "socketserver"
source_url: "https://docs.python.org/3/library/socketserver.html#socketserver.TCPServer"
license: "PSF"
updated: "2026-10-01"
---

# TCPServer

This uses the internet TCP protocol, which provides for
continuous streams of data between the client and server.
If *bind_and_activate* is true, the constructor automatically attempts to
invoke `~BaseServer.server_bind` and
`~BaseServer.server_activate`.  The other parameters are passed to
the `BaseServer` base class.

> *Changed in 3.15*: The default queue size is now ``socket.SOMAXCONN`` for :class:`socketserver.TCPServer`.
