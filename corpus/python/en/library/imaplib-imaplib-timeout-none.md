---
id: "python-en-function-imaplib-timeout-none"
language: "python"
lang: "en"
category: "function"
name: "timeout=None)"
directive: "class"
module: "imaplib"
source_url: "https://docs.python.org/3/library/imaplib.html#imaplib.timeout=None)"
license: "PSF"
updated: "2026-10-01"
---

# timeout=None)

This is a subclass derived from `IMAP4` that connects over an SSL
encrypted socket (to use this class you need a socket module that was compiled
with SSL support).  If *host* is not specified, `''` (the local host) is used.
If *port* is omitted, the standard IMAP4-over-SSL port (993) is used.
*ssl_context* is a `ssl.SSLContext` object which allows bundling
SSL configuration options, certificates and private keys into a single
(potentially long-lived) structure.  Please read `ssl-security` for
best practices.

> **Note**
>
> With the default *ssl_context*, the connection is encrypted but the
> server certificate and hostname are not verified.
> To verify them, pass a context created by
> `ssl.create_default_context`.
>

The optional *timeout* parameter specifies a timeout in seconds for the
connection attempt. If timeout is not given or is `None`, the global default
socket timeout is used.

> *Changed in 3.3*: *ssl_context* parameter was added.

> *Changed in 3.4*: The class now supports hostname check with :attr:`ssl.SSLContext.check_hostname` and *Server Name Indication* (see :const:`ssl.HAS_SNI`).

> *Changed in 3.9*: The optional *timeout* parameter was added.

> *Changed in 3.12*: The deprecated *keyfile* and *certfile* parameters have been removed.
