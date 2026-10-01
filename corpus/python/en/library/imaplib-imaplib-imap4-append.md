---
id: "python-en-function-imaplib-imap4-append"
language: "python"
lang: "en"
category: "function"
name: "IMAP4.append"
signature: "IMAP4.append(mailbox, flags, date_time, message, *, translate_line_endings=True)"
directive: "method"
module: "imaplib"
source_url: "https://docs.python.org/3/library/imaplib.html#imaplib.IMAP4.append"
license: "PSF"
updated: "2026-10-01"
---

# IMAP4.append

Append *message* to named mailbox.

*flags* may be `None` or a string of IMAP flag tokens.  Multiple
flags are separated by spaces, for example `r'\Seen \Answered'`.
If *flags* is not already enclosed in parentheses, parentheses are
added automatically.

If *translate_line_endings* is true (the default),
line endings in *message* are translated to CRLF.
Pass `False` to send the message literal exactly as given,
which is required to preserve messages that contain bare CR or LF.
In that case *message* must already use CRLF line endings as required
by RFC 3501; for example, serialize `email` messages using
`email.policy.SMTP`.

> *Changed in next*: Added the *translate_line_endings* parameter.
