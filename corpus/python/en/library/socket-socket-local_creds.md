---
id: "python-en-function-socket-local_creds"
language: "python"
lang: "en"
category: "function"
name: "LOCAL_CREDS"
directive: "data"
module: "socket"
source_url: "https://docs.python.org/3/library/socket.html#socket.LOCAL_CREDS"
license: "PSF"
updated: "2026-10-01"
---

# LOCAL_CREDS

LOCAL_CREDS and LOCAL_CREDS_PERSISTENT can be used
with SOCK_DGRAM, SOCK_STREAM sockets, equivalent to
Linux/DragonFlyBSD SO_PASSCRED, while LOCAL_CREDS
sends the credentials at first read, LOCAL_CREDS_PERSISTENT
sends for each read, SCM_CREDS2 must be then used for
the latter for the message type.

> *Added in 3.11*

availability:: FreeBSD.
