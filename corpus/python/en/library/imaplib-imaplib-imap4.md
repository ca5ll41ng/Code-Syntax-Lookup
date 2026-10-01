---
id: "python-en-function-imaplib-imap4"
language: "python"
lang: "en"
category: "function"
name: "IMAP4"
signature: "IMAP4(host='', port=IMAP4_PORT, timeout=None)"
directive: "class"
module: "imaplib"
source_url: "https://docs.python.org/3/library/imaplib.html#imaplib.IMAP4"
license: "PSF"
updated: "2026-10-01"
---

# IMAP4

This class implements the actual IMAP4 protocol.  The connection is created and
protocol version (IMAP4 or IMAP4rev1) is determined when the instance is
initialized. If *host* is not specified, `''` (the local host) is used. If
*port* is omitted, the standard IMAP4 port (143) is used. The optional *timeout*
parameter specifies a timeout in seconds for the connection attempt.
If timeout is not given or is `None`, the global default socket timeout is used.

The `IMAP4` class supports the `with` statement.  When used
like this, the IMAP4 `LOGOUT` command is issued automatically when the
`with` statement exits.  E.g.::

 >>> from imaplib import IMAP4
 >>> with IMAP4("domain.org") as M:
 ...     M.noop()
 ...
 ('OK', [b'Nothing Accomplished. d25if65hy903weo.87'])

> *Changed in 3.5*: Support for the :keyword:`with` statement was added.

> *Changed in 3.9*: The optional *timeout* parameter was added.
