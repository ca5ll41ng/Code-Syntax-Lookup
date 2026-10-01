---
id: "python-en-function-imaplib-imap4-fetch"
language: "python"
lang: "en"
category: "function"
name: "IMAP4.fetch"
signature: "IMAP4.fetch(message_set, message_parts, *, uid=False, params=None)"
directive: "method"
module: "imaplib"
source_url: "https://docs.python.org/3/library/imaplib.html#imaplib.IMAP4.fetch"
license: "PSF"
updated: "2026-10-01"
---

# IMAP4.fetch

Fetch (parts of) messages.  *message_parts* should be a string of message part
names enclosed within parentheses, eg: `"(UID BODY[TEXT])"`.  Returned data
are tuples of message part envelope and data.

If *uid* is true, *message_set* is a set of UIDs and the message numbers in
the response are UIDs (`UID FETCH`).

If *params* is given, `?` placeholders in *message_parts* are substituted
with the quoted parameters (see `the placeholders`).

> *Changed in next*: Added the *params* and *uid* parameters.
