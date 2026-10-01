---
id: "python-en-function-smtplib-smtp-send_message-msg-from_addr-none-to_addrs-none"
language: "python"
lang: "en"
category: "function"
name: "SMTP.send_message(msg, from_addr=None, to_addrs=None, \\"
directive: "method"
module: "smtplib"
source_url: "https://docs.python.org/3/library/smtplib.html#smtplib.SMTP.send_message(msg, from_addr=None, to_addrs=None, \\"
license: "PSF"
updated: "2026-10-01"
---

# SMTP.send_message(msg, from_addr=None, to_addrs=None, \

This is a convenience method for calling `sendmail` with the message
represented by an `email.message.Message` object.  The arguments have
the same meaning as for `sendmail`, except that *msg* is a `Message`
object.

If *from_addr* is `None` or *to_addrs* is `None`, `send_message` fills
those arguments with addresses extracted from the headers of *msg* as
specified in RFC 5322\: *from_addr* is set to the `Sender`
field if it is present, and otherwise to the `From` field.
*to_addrs* combines the values (if any) of the `To`,
`Cc`, and `Bcc` fields from *msg*.  If exactly one
set of `Resent-*` headers appear in the message, the regular
headers are ignored and the `Resent-*` headers are used instead.
If the message contains more than one set of `Resent-*` headers,
a `ValueError` is raised, since there is no way to unambiguously detect
the most recent set of `Resent-` headers.

`send_message` serializes *msg* using
`~email.generator.BytesGenerator` with `\r\n` as the *linesep*, and
calls `sendmail` to transmit the resulting message.  Regardless of the
values of *from_addr* and *to_addrs*, `send_message` does not transmit any
`Bcc` or `Resent-Bcc` headers that may appear
in *msg*.  If any of the addresses in *from_addr* and *to_addrs* contain
non-ASCII characters and the server does not advertise `SMTPUTF8` support,
an `SMTPNotSupportedError` is raised.  Otherwise the `Message` is
serialized with a clone of its `~email.policy` with the
`~email.policy.EmailPolicy.utf8` attribute set to `True`, and
`SMTPUTF8` and `BODY=8BITMIME` are added to *mail_options*.

> *Added in 3.2*

> *Added in 3.5*: Support for internationalized addresses (``SMTPUTF8``).
