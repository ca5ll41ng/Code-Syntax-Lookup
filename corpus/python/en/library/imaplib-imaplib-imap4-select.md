---
id: "python-en-function-imaplib-imap4-select"
language: "python"
lang: "en"
category: "function"
name: "IMAP4.select"
signature: "IMAP4.select(mailbox='INBOX', readonly=False)"
directive: "method"
module: "imaplib"
source_url: "https://docs.python.org/3/library/imaplib.html#imaplib.IMAP4.select"
license: "PSF"
updated: "2026-10-01"
---

# IMAP4.select

Select a mailbox. Returned data is the count of messages in *mailbox*
(`EXISTS` response).  The default *mailbox* is `'INBOX'`.  If the *readonly*
flag is set, modifications to the mailbox are not allowed.
