---
id: "python-en-function-socket-send_fds"
language: "python"
lang: "en"
category: "function"
name: "send_fds"
signature: "send_fds(sock, buffers, fds[, flags[, address]])"
directive: "function"
module: "socket"
source_url: "https://docs.python.org/3/library/socket.html#socket.send_fds"
license: "PSF"
updated: "2026-10-01"
---

# send_fds

Send the list of file descriptors *fds* over an `AF_UNIX` socket *sock*.
The *fds* parameter is a sequence of file descriptors.
Consult `~socket.sendmsg` for the documentation of these parameters.

availability:: Unix, not WASI.

> *Added in 3.9*
