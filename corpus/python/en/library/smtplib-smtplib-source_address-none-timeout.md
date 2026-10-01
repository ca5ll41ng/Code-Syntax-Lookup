---
id: "python-en-function-smtplib-source_address-none-timeout"
language: "python"
lang: "en"
category: "function"
name: "source_address=None[, timeout])"
directive: "class"
module: "smtplib"
source_url: "https://docs.python.org/3/library/smtplib.html#smtplib.source_address=None[, timeout])"
license: "PSF"
updated: "2026-10-01"
---

# source_address=None[, timeout])

The LMTP protocol, which is very similar to ESMTP, is heavily based on the
standard SMTP client. It's common to use Unix sockets for LMTP, so our
`~SMTP.connect` method must support that as well as a regular host:port
server. The optional arguments *local_hostname* and *source_address* have the
same meaning as they do in the `SMTP` class. To specify a Unix
socket, you must use an absolute path for *host*, starting with a '/'.

Authentication is supported, using the regular SMTP mechanism. When using a
Unix socket, LMTP generally don't support or require any authentication, but
your mileage might vary.

> *Changed in 3.9*: The optional *timeout* parameter was added.
