---
id: "python-en-function-imaplib-imap4-move"
language: "python"
lang: "en"
category: "function"
name: "IMAP4.move"
signature: "IMAP4.move(message_set, new_mailbox, *, uid=False)"
directive: "method"
module: "imaplib"
source_url: "https://docs.python.org/3/library/imaplib.html#imaplib.IMAP4.move"
license: "PSF"
updated: "2026-10-01"
---

# IMAP4.move

Move *message_set* messages onto end of *new_mailbox*.

The server must support the `MOVE` capability (RFC 6851).

If *uid* is true, *message_set* is a set of UIDs and the `UID MOVE`
command is used instead of `MOVE`.

> *Added in next*
