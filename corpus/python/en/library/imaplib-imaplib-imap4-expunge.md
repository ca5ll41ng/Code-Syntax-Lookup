---
id: "python-en-function-imaplib-imap4-expunge"
language: "python"
lang: "en"
category: "function"
name: "IMAP4.expunge"
signature: "IMAP4.expunge(message_set=None, *, uid=False)"
directive: "method"
module: "imaplib"
source_url: "https://docs.python.org/3/library/imaplib.html#imaplib.IMAP4.expunge"
license: "PSF"
updated: "2026-10-01"
---

# IMAP4.expunge

Permanently remove deleted items from selected mailbox. Generates an `EXPUNGE`
response for each deleted message. Returned data contains a list of `EXPUNGE`
message numbers in order received.

If *uid* is true, the `UID EXPUNGE` command (RFC 4315) is used to remove
only the messages that both are marked as deleted and have a UID in
*message_set*.  *message_set* is required in this case, and must be omitted
otherwise.

> *Changed in next*: Added the *message_set* and *uid* parameters.
