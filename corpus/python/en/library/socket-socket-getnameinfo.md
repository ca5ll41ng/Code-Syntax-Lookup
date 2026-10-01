---
id: "python-en-function-socket-getnameinfo"
language: "python"
lang: "en"
category: "function"
name: "getnameinfo"
signature: "getnameinfo(sockaddr, flags)"
directive: "function"
module: "socket"
source_url: "https://docs.python.org/3/library/socket.html#socket.getnameinfo"
license: "PSF"
updated: "2026-10-01"
---

# getnameinfo

Translate a socket address *sockaddr* into a 2-tuple `(host, port)`. Depending
on the settings of *flags*, the result can contain a fully qualified domain name
or numeric address representation in *host*.  Similarly, *port* can contain a
string port name or a numeric port number.

For IPv6 addresses, `%scope_id` is appended to the host part if *sockaddr*
contains meaningful *scope_id*. Usually this happens for multicast addresses.

For more information about *flags* you can consult `getnameinfo(3)`.

audit-event:: socket.getnameinfo sockaddr socket.getnameinfo

availability:: not WASI.
