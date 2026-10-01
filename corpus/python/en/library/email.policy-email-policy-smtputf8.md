---
id: "python-en-function-email-policy-smtputf8"
language: "python"
lang: "en"
category: "function"
name: "SMTPUTF8"
directive: "data"
module: "email.policy"
source_url: "https://docs.python.org/3/library/email.policy.html#email.policy.SMTPUTF8"
license: "PSF"
updated: "2026-10-01"
---

# SMTPUTF8

The same as `SMTP` except that `~EmailPolicy.utf8` is `True`.
Useful for serializing messages to a message store without using encoded
words in the headers.  Should only be used for SMTP transmission if the
sender or recipient addresses have non-ASCII characters (the
`smtplib.SMTP.send_message` method handles this automatically).
