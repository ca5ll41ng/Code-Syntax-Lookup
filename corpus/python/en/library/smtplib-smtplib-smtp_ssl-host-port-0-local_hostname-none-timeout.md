---
id: "python-en-function-smtplib-smtp_ssl-host-port-0-local_hostname-none-timeout"
language: "python"
lang: "en"
category: "function"
name: "SMTP_SSL(host='', port=0, local_hostname=None, * [, timeout], \\"
directive: "class"
module: "smtplib"
source_url: "https://docs.python.org/3/library/smtplib.html#smtplib.SMTP_SSL(host='', port=0, local_hostname=None, * [, timeout], \\"
license: "PSF"
updated: "2026-10-01"
---

# SMTP_SSL(host='', port=0, local_hostname=None, * [, timeout], \

An `SMTP_SSL` instance behaves exactly the same as instances of
`SMTP`. `SMTP_SSL` should be used for situations where SSL is
required from the beginning of the connection and using `SMTP.starttls` is
not appropriate.

If the host parameter is set to a truthy value, `SMTP.connect` is called with host
and port automatically when the object is created; otherwise, `SMTP.connect` must
be called manually.

The optional arguments *local_hostname*, *timeout* and *source_address* have the same
meaning as they do in the `SMTP` class.  *context*, also optional,
can contain a `~ssl.SSLContext` and allows configuring various
aspects of the secure connection.  Please read `ssl-security` for
best practices.

attribute:: SMTP_SSL.default_port

> *Changed in 3.3*: *context* was added.

> *Changed in 3.3*: The *source_address* argument was added.

> *Changed in 3.4*: The class now supports hostname check with :attr:`ssl.SSLContext.check_hostname` and *Server Name Indication* (see :const:`ssl.HAS_SNI`).

> *Changed in 3.9*: If the *timeout* parameter is set to be zero, it will raise a :class:`ValueError` to prevent the creation of a non-blocking socket

> *Changed in 3.12*: The deprecated *keyfile* and *certfile* parameters have been removed.
