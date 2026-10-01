---
id: "python-en-function-logging-handlers-smtphandler"
language: "python"
lang: "en"
category: "function"
name: "SMTPHandler"
signature: "SMTPHandler(mailhost, fromaddr, toaddrs, subject, credentials=None, secure=None, timeout=1.0)"
directive: "class"
module: "logging.handlers"
source_url: "https://docs.python.org/3/library/logging.handlers.html#logging.handlers.SMTPHandler"
license: "PSF"
updated: "2026-10-01"
---

# SMTPHandler

Returns a new instance of the `SMTPHandler` class. The instance is
initialized with the from and to addresses and subject line of the email. The
*toaddrs* should be a list of strings. To specify a non-standard SMTP port, use
the (host, port) tuple format for the *mailhost* argument. If you use a string,
the standard SMTP port is used. If your SMTP server requires authentication, you
can specify a (username, password) tuple for the *credentials* argument.

To specify the use of a secure protocol (TLS), pass in a tuple to the
*secure* argument. This will only be used when authentication credentials are
supplied. The tuple should be either an empty tuple, or a single-value tuple
with the name of a keyfile, or a 2-value tuple with the names of the keyfile
and certificate file. (This tuple is passed to the
`smtplib.SMTP.starttls` method.)

A timeout can be specified for communication with the SMTP server using the
*timeout* argument.

> *Changed in 3.3*: Added the *timeout* parameter.

method:: emit(record)

method:: getSubject(record)
