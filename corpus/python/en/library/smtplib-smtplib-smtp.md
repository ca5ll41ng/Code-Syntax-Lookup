---
id: "python-en-function-smtplib-smtp"
language: "python"
lang: "en"
category: "function"
name: "SMTP"
signature: "SMTP(host='', port=0, local_hostname=None[, timeout], source_address=None)"
directive: "class"
module: "smtplib"
source_url: "https://docs.python.org/3/library/smtplib.html#smtplib.SMTP"
license: "PSF"
updated: "2026-10-01"
---

# SMTP

An `SMTP` instance encapsulates an SMTP connection.  It has methods
that support a full repertoire of SMTP and ESMTP operations.

If the host parameter is set to a truthy value, `SMTP.connect` is called with
host and port automatically when the object is created; otherwise, `connect` must
be called manually.

If specified, *local_hostname* is used as the FQDN of the local host in the HELO/EHLO
command.  Otherwise, the local hostname is found using
`socket.getfqdn`.  If the `connect` call returns anything other
than a success code, an `SMTPConnectError` is raised. The optional
*timeout* parameter specifies a timeout in seconds for blocking operations
like the connection attempt (if not specified, the global default timeout
setting will be used).  If the timeout expires, `TimeoutError` is
raised.  The optional *source_address* parameter allows binding
to some specific source address in a machine with multiple network
interfaces, and/or to some specific source TCP port. It takes a 2-tuple
`(host, port)`, for the socket to bind to as its source address before
connecting. If omitted (or if *host* or *port* are `''` and/or `0`
respectively) the OS default behavior will be used.

For normal use, you should only require the initialization/connect,
`sendmail`, and `SMTP.quit` methods.
An example is included below.

The `SMTP` class supports the `with` statement.  When used
like this, the SMTP `QUIT` command is issued automatically when the
`with` statement exits.  E.g.::

 >>> from smtplib import SMTP
 >>> with SMTP("domain.org") as smtp:
 ...     smtp.noop()
 ...
 (250, b'Ok')
 >>>

audit-event:: smtplib.send self,data smtplib.SMTP

attribute:: SMTP.default_port

> *Changed in 3.3*: Support for the :keyword:`with` statement was added.

> *Changed in 3.3*: *source_address* argument was added.

> *Added in 3.5*: The SMTPUTF8 extension (:rfc:`6531`) is now supported.

> *Changed in 3.9*: If the *timeout* parameter is set to be zero, it will raise a :class:`ValueError` to prevent the creation of a non-blocking socket.
