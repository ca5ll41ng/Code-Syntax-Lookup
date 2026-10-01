---
id: "python-en-function-socket-close"
language: "python"
lang: "en"
category: "function"
name: "close"
signature: "close(fd)"
directive: "function"
module: "socket"
source_url: "https://docs.python.org/3/library/socket.html#socket.close"
license: "PSF"
updated: "2026-10-01"
---

# close

Close a socket file descriptor. This is like `os.close`, but for
sockets. On some platforms (most notably Windows) `os.close`
does not work for socket file descriptors.

> *Added in 3.7*
