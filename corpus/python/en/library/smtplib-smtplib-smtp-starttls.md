---
id: "python-en-function-smtplib-smtp-starttls"
language: "python"
lang: "en"
category: "function"
name: "SMTP.starttls"
signature: "SMTP.starttls(*, context=None)"
directive: "method"
module: "smtplib"
source_url: "https://docs.python.org/3/library/smtplib.html#smtplib.SMTP.starttls"
license: "PSF"
updated: "2026-10-01"
---

# SMTP.starttls

Put the SMTP connection in TLS (Transport Layer Security) mode.  All SMTP
commands that follow will be encrypted.  You should then call `ehlo`
again.

If *keyfile* and *certfile* are provided, they are used to create an
`ssl.SSLContext`.

Optional *context* parameter is an `ssl.SSLContext` object; This is
an alternative to using a keyfile and a certfile and if specified both
*keyfile* and *certfile* should be `None`.

If there has been no previous `EHLO` or `HELO` command this session,
this method tries ESMTP `EHLO` first.

> *Changed in 3.12*: The deprecated *keyfile* and *certfile* parameters have been removed.

`SMTPHeloError`
   The server didn't reply properly to the `HELO` greeting.

`SMTPNotSupportedError`
  The server does not support the STARTTLS extension.

`RuntimeError`
  SSL/TLS support is not available to your Python interpreter.

> *Changed in 3.3*: *context* was added.

> *Changed in 3.4*: The method now supports hostname check with :attr:`ssl.SSLContext.check_hostname` and *Server Name Indicator* (see :const:`~ssl.HAS_SNI`).

> *Changed in 3.5*: The error raised for lack of STARTTLS support is now the :exc:`SMTPNotSupportedError` subclass instead of the base :exc:`SMTPException`.
