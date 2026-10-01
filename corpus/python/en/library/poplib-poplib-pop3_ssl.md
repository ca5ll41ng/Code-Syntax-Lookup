---
id: "python-en-function-poplib-pop3_ssl"
language: "python"
lang: "en"
category: "function"
name: "POP3_SSL"
signature: "POP3_SSL(host, port=POP3_SSL_PORT, *, timeout=None, context=None)"
directive: "class"
module: "poplib"
source_url: "https://docs.python.org/3/library/poplib.html#poplib.POP3_SSL"
license: "PSF"
updated: "2026-10-01"
---

# POP3_SSL

This is a subclass of `POP3` that connects to the server over an SSL
encrypted socket.  If *port* is not specified, 995, the standard POP3-over-SSL
port is used.  *timeout* works as in the `POP3` constructor.
*context* is an optional `ssl.SSLContext` object which allows
bundling SSL configuration options, certificates and private keys into a
single (potentially long-lived) structure.  Please read `ssl-security`
for best practices.

audit-event:: poplib.connect self,host,port poplib.POP3_SSL

audit-event:: poplib.putline self,line poplib.POP3_SSL

> *Changed in 3.2*: *context* parameter added.

> *Changed in 3.4*: The class now supports hostname check with :attr:`ssl.SSLContext.check_hostname` and *Server Name Indication* (see :const:`ssl.HAS_SNI`).

> *Changed in 3.9*: If the *timeout* parameter is set to be zero, it will raise a :class:`ValueError` to prevent the creation of a non-blocking socket.

> *Changed in 3.12*: The deprecated *keyfile* and *certfile* parameters have been removed.
