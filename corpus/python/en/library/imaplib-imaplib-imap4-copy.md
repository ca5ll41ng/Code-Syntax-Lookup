---
id: "python-en-function-imaplib-imap4-copy"
language: "python"
lang: "en"
category: "function"
name: "IMAP4.copy"
signature: "IMAP4.copy(message_set, new_mailbox, *, uid=False)"
directive: "method"
module: "imaplib"
source_url: "https://docs.python.org/3/library/imaplib.html#imaplib.IMAP4.copy"
license: "PSF"
updated: "2026-10-01"
---

# IMAP4.copy

Copy *message_set* messages onto end of *new_mailbox*.

If *uid* is true, *message_set* is a set of UIDs and the `UID COPY`
command is used instead of `COPY`.

> *Changed in next*: Added the *uid* parameter.
