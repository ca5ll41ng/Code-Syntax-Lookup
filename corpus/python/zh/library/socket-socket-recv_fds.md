---
id: "python-zh-function-socket-recv_fds"
language: "python"
lang: "zh"
category: "function"
name: "recv_fds"
signature: "recv_fds(sock, bufsize, maxfds[, flags])"
directive: "function"
module: "socket"
source_url: "https://docs.python.org/zh-cn/3/library/socket.html#socket.recv_fds"
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
> 位于文件描述符列表末尾的任何被截断整数。
>
