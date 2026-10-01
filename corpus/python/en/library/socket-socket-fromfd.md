---
id: "python-en-function-socket-fromfd"
language: "python"
lang: "en"
category: "function"
name: "fromfd"
signature: "fromfd(fd, family, type, proto=0)"
directive: "function"
module: "socket"
source_url: "https://docs.python.org/3/library/socket.html#socket.fromfd"
license: "PSF"
updated: "2026-10-01"
---

# fromfd

Duplicate the file descriptor *fd* (an integer as returned by a file object's
`~io.IOBase.fileno` method) and build a socket object from the result.  Address
family, socket type and protocol number are as for the `~socket.socket` function.
The file descriptor should refer to a socket, but this is not checked ---
subsequent operations on the object may fail if the file descriptor is invalid.
This function is rarely needed, but can be used to get or set socket options on
a socket passed to a program as standard input or output (such as a server
started by the Unix inet daemon).  The socket is assumed to be in blocking mode.

The newly created socket is `non-inheritable`.

> *Changed in 3.4*: The returned socket is now non-inheritable.
