---
id: "python-en-function-imaplib-imap4-open"
language: "python"
lang: "en"
category: "function"
name: "IMAP4.open"
signature: "IMAP4.open(host, port, timeout=None)"
directive: "method"
module: "imaplib"
source_url: "https://docs.python.org/3/library/imaplib.html#imaplib.IMAP4.open"
license: "PSF"
updated: "2026-10-01"
---

# IMAP4.open

Opens socket to *port* at *host*. The optional *timeout* parameter
specifies a timeout in seconds for the connection attempt.
If timeout is not given or is `None`, the global default socket timeout
is used. Also note that if the *timeout* parameter is set to be zero,
it will raise a `ValueError` to reject creating a non-blocking socket.
This method is implicitly called by the `IMAP4` constructor.
The connection objects established by this method will be used in
the `IMAP4.read`, `IMAP4.readline`, `IMAP4.send`,
and `IMAP4.shutdown` methods. You may override this method.

audit-event:: imaplib.open self,host,port imaplib.IMAP4.open

> *Changed in 3.9*: The *timeout* parameter was added.
