---
id: "python-en-function-smtplib-lmtp-host-port-lmtp_port-local_hostname-none"
language: "python"
lang: "en"
category: "function"
name: "LMTP(host='', port=LMTP_PORT, local_hostname=None, \\"
directive: "class"
module: "smtplib"
source_url: "https://docs.python.org/3/library/smtplib.html#smtplib.LMTP(host='', port=LMTP_PORT, local_hostname=None, \\"
license: "PSF"
updated: "2026-10-01"
---

# LMTP(host='', port=LMTP_PORT, local_hostname=None, \

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
