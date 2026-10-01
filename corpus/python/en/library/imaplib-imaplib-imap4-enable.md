---
id: "python-en-function-imaplib-imap4-enable"
language: "python"
lang: "en"
category: "function"
name: "IMAP4.enable"
signature: "IMAP4.enable(capability)"
directive: "method"
module: "imaplib"
source_url: "https://docs.python.org/3/library/imaplib.html#imaplib.IMAP4.enable"
license: "PSF"
updated: "2026-10-01"
---

# IMAP4.enable

Enable *capability* (see RFC 5161).  Most capabilities do not need to be
enabled.  Currently only the `UTF8=ACCEPT` capability is supported
(see `6855`).

> *Added in 3.5*: The :meth:`enable` method itself, and :RFC:`6855` support.
