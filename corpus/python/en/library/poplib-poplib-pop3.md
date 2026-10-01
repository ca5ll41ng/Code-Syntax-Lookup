---
id: "python-en-function-poplib-pop3"
language: "python"
lang: "en"
category: "function"
name: "POP3"
signature: "POP3(host, port=POP3_PORT[, timeout])"
directive: "class"
module: "poplib"
source_url: "https://docs.python.org/3/library/poplib.html#poplib.POP3"
license: "PSF"
updated: "2026-10-01"
---

# POP3

This class implements the actual POP3 protocol.  The connection is created when
the instance is initialized. If *port* is omitted, the standard POP3 port (110)
is used. The optional *timeout* parameter specifies a timeout in seconds for the
connection attempt (if not specified, the global default timeout setting will
be used).

audit-event:: poplib.connect self,host,port poplib.POP3

audit-event:: poplib.putline self,line poplib.POP3

> *Changed in 3.9*: If the *timeout* parameter is set to be zero, it will raise a :class:`ValueError` to prevent the creation of a non-blocking socket.
