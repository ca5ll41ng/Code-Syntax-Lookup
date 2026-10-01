---
id: "python-en-function-socket-htons"
language: "python"
lang: "en"
category: "function"
name: "htons"
signature: "htons(x)"
directive: "function"
module: "socket"
source_url: "https://docs.python.org/3/library/socket.html#socket.htons"
license: "PSF"
updated: "2026-10-01"
---

# htons

Convert 16-bit positive integers from host to network byte order.  On machines
where the host byte order is the same as network byte order, this is a no-op;
otherwise, it performs a 2-byte swap operation.

> *Changed in 3.10*: Raises :exc:`OverflowError` if *x* does not fit in a 16-bit unsigned integer.
