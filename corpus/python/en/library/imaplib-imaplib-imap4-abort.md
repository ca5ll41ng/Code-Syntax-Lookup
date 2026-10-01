---
id: "python-en-function-imaplib-imap4-abort"
language: "python"
lang: "en"
category: "function"
name: "IMAP4.abort"
directive: "exception"
module: "imaplib"
source_url: "https://docs.python.org/3/library/imaplib.html#imaplib.IMAP4.abort"
license: "PSF"
updated: "2026-10-01"
---

# IMAP4.abort

IMAP4 server errors cause this exception to be raised.  This is a sub-class of
`IMAP4.error`.  Note that closing the instance and instantiating a new one
will usually allow recovery from this exception.
