---
id: "python-en-function-socket-ntohs"
language: "python"
lang: "en"
category: "function"
name: "ntohs"
signature: "ntohs(x)"
directive: "function"
module: "socket"
source_url: "https://docs.python.org/3/library/socket.html#socket.ntohs"
license: "PSF"
updated: "2026-10-01"
---

# ntohs

Convert 16-bit positive integers from network to host byte order.  On machines
where the host byte order is the same as network byte order, this is a no-op;
otherwise, it performs a 2-byte swap operation.

> *Changed in 3.10*: Raises :exc:`OverflowError` if *x* does not fit in a 16-bit unsigned integer.
