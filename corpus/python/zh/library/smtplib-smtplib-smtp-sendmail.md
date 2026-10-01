---
id: "python-zh-function-smtplib-smtp-sendmail"
language: "python"
lang: "zh"
category: "function"
name: "SMTP.sendmail"
signature: "SMTP.sendmail(from_addr, to_addrs, msg, mail_options=(), rcpt_options=())"
directive: "method"
module: "smtplib"
source_url: "https://docs.python.org/zh-cn/3/library/smtplib.html#smtplib.SMTP.sendmail"
license: "PSF"
updated: "2026-10-01"
---

# SMTP.sendmail

Send mail.  The required arguments are an RFC 822 from-address string, a list
of RFC 822 to-address strings (a bare string will be treated as a list with 1
address), and a message string.  The caller may pass a list of ESMTP options
(such as `"8bitmime"`) to be used in `MAIL FROM` commands as *mail_options*.
ESMTP options (such as `DSN` commands) that should be used with all `RCPT`
commands can be passed as *rcpt_options*. Each option should be passed as a string
containing the full text of the option, including any potential key
(for instance, `"NOTIFY=SUCCESS,FAILURE"`). (If you need to use different ESMTP
options to different recipients you have to use the low-level methods such as
`mail`, `rcpt` and `data` to send the message.)

> **Note**
>
> The *from_addr* and *to_addrs* parameters are used to construct the message
> envelope used by the transport agents.  `sendmail` does not modify the
> message headers in any way.
>

*msg* may be a string containing characters in the ASCII range, or a byte
string.  A string is encoded to bytes using the ascii codec, and lone `\r`
and `\n` characters are converted to `\r\n` characters.  A byte string is
not modified.

If there has been no previous `EHLO` or `HELO` command this session, this
method tries ESMTP `EHLO` first. If the server does ESMTP, message size and
each of the specified options will be passed to it (if the option is in the
feature set the server advertises).  If `EHLO` fails, `HELO` will be tried
and ESMTP options suppressed.

This method will return normally if the mail is accepted for at least one
recipient. Otherwise it will raise an exception.  That is, if this method does
not raise an exception, then someone should get your mail. If this method does
not raise an exception, it returns a dictionary, with one entry for each
recipient that was refused.  Each entry contains a tuple of the SMTP error code
and the accompanying error message sent by the server.

If `SMTPUTF8` is included in *mail_options*, and the server supports it,
*from_addr* and *to_addrs* may contain non-ASCII characters.

此方法可能引发以下异常：

`SMTPRecipientsRefused`
   All recipients were refused.  Nobody got the mail.

`SMTPHeloError`
   The server didn't reply properly to the `HELO` greeting.

`SMTPSenderRefused`
   The server didn't accept the *from_addr*.

`SMTPDataError`
   The server replied with an unexpected error code (other than a refusal of a
   recipient).

`SMTPNotSupportedError`
   `SMTPUTF8` was given in the *mail_options* but is not supported by the
   server.

Unless otherwise noted, the connection will be open even after an exception is
raised.

> *Changed in 3.2*: *msg* may be a byte string.

> *Changed in 3.5*: ``SMTPUTF8`` support added, and :exc:`SMTPNotSupportedError` may be raised if ``SMTPUTF8`` is specified but the server does not support it.
