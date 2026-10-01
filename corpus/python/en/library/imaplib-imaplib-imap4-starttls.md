---
id: "python-en-function-imaplib-imap4-starttls"
language: "python"
lang: "en"
category: "function"
name: "IMAP4.starttls"
signature: "IMAP4.starttls(ssl_context=None)"
directive: "method"
module: "imaplib"
source_url: "https://docs.python.org/3/library/imaplib.html#imaplib.IMAP4.starttls"
license: "PSF"
updated: "2026-10-01"
---

# IMAP4.starttls

Send a `STARTTLS` command.  The *ssl_context* argument is optional
and should be a `ssl.SSLContext` object.  This will enable
encryption on the IMAP connection.  Please read `ssl-security` for
best practices.

> **Note**
>
> With the default *ssl_context*, the connection is encrypted but the
> server certificate and hostname are not verified.
> To verify them, pass a context created by
> `ssl.create_default_context`.
>

> *Added in 3.2*

> *Changed in 3.4*: The method now supports hostname check with :attr:`ssl.SSLContext.check_hostname` and *Server Name Indication* (see :const:`ssl.HAS_SNI`).
