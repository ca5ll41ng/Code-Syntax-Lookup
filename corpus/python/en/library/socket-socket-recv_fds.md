---
id: "python-en-function-socket-recv_fds"
language: "python"
lang: "en"
category: "function"
name: "recv_fds"
signature: "recv_fds(sock, bufsize, maxfds[, flags])"
directive: "function"
module: "socket"
source_url: "https://docs.python.org/3/library/socket.html#socket.recv_fds"
license: "PSF"
updated: "2026-10-01"
---

# recv_fds

Receive up to *maxfds* file descriptors from an `AF_UNIX` socket *sock*.
Return `(msg, list(fds), flags, addr)`.
Consult `~socket.recvmsg` for the documentation of these parameters.

availability:: Unix, not WASI.

> *Added in 3.9*

> **Note**
>
> Any truncated integers at the end of the list of file descriptors.
>
