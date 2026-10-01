---
id: "python-en-function-socket-gethostbyname_ex"
language: "python"
lang: "en"
category: "function"
name: "gethostbyname_ex"
signature: "gethostbyname_ex(hostname)"
directive: "function"
module: "socket"
source_url: "https://docs.python.org/3/library/socket.html#socket.gethostbyname_ex"
license: "PSF"
updated: "2026-10-01"
---

# gethostbyname_ex

Translate a host name to IPv4 address format, extended interface. Return a
3-tuple `(hostname, aliaslist, ipaddrlist)` where *hostname* is the host's
primary host name, *aliaslist* is a (possibly
empty) list of alternative host names for the same address, and *ipaddrlist* is
a list of IPv4 addresses for the same interface on the same host (often but not
always a single address). `gethostbyname_ex` does not support IPv6 name
resolution, and `getaddrinfo` should be used instead for IPv4/v6 dual
stack support.

audit-event:: socket.gethostbyname hostname socket.gethostbyname_ex

availability:: not WASI.
