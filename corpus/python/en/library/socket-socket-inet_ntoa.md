---
id: "python-en-function-socket-inet_ntoa"
language: "python"
lang: "en"
category: "function"
name: "inet_ntoa"
signature: "inet_ntoa(packed_ip)"
directive: "function"
module: "socket"
source_url: "https://docs.python.org/3/library/socket.html#socket.inet_ntoa"
license: "PSF"
updated: "2026-10-01"
---

# inet_ntoa

Convert a 32-bit packed IPv4 address (a `bytes-like object` four
bytes in length) to its standard dotted-quad string representation (for example,
'123.45.67.89').  This is useful when conversing with a program that uses the
standard C library and needs objects of type :c`in_addr`, which
is the C type for the 32-bit packed binary data this function takes as an
argument.

If the byte sequence passed to this function is not exactly 4 bytes in
length, `OSError` will be raised. `inet_ntoa` does not
support IPv6, and `inet_ntop` should be used instead for IPv4/v6 dual
stack support.

> *Changed in 3.5*: Writable :term:`bytes-like object` is now accepted.
