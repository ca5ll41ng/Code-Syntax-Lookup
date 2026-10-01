---
id: "python-en-function-socket-sockettype"
language: "python"
lang: "en"
category: "function"
name: "SocketType"
directive: "class"
module: "socket"
source_url: "https://docs.python.org/3/library/socket.html#socket.SocketType"
license: "PSF"
updated: "2026-10-01"
---

# SocketType

The base class of the `~socket.socket` type, re-exported from
`_socket`.  An instance check such as
`isinstance(socket(...), SocketType)` is true, but `SocketType` is not
the same as `type(socket(...))`, which is `~socket.socket` itself.
