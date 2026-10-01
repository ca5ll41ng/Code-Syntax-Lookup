---
id: "python-en-function-imaplib-imap4-unselect"
language: "python"
lang: "en"
category: "function"
name: "IMAP4.unselect"
signature: "IMAP4.unselect()"
directive: "method"
module: "imaplib"
source_url: "https://docs.python.org/3/library/imaplib.html#imaplib.IMAP4.unselect"
license: "PSF"
updated: "2026-10-01"
---

# IMAP4.unselect

`imaplib.IMAP4.unselect` frees server's resources associated with the
selected mailbox and returns the server to the authenticated
state. This command performs the same actions as `imaplib.IMAP4.close`, except
that no messages are permanently removed from the currently
selected mailbox.

> *Added in 3.9*
