---
id: "python-en-function-socket-getprotobyname"
language: "python"
lang: "en"
category: "function"
name: "getprotobyname"
signature: "getprotobyname(protocolname)"
directive: "function"
module: "socket"
source_url: "https://docs.python.org/3/library/socket.html#socket.getprotobyname"
license: "PSF"
updated: "2026-10-01"
---

# getprotobyname

Translate an internet protocol name (for example, `'icmp'`) to a constant
suitable for passing as the (optional) third argument to the `~socket.socket`
function.  This is usually only needed for sockets opened in "raw" mode
(`SOCK_RAW`); for the normal socket modes, the correct protocol is chosen
automatically if the protocol is omitted or zero.

availability:: not WASI.
