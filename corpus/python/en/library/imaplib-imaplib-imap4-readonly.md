---
id: "python-en-function-imaplib-imap4-readonly"
language: "python"
lang: "en"
category: "function"
name: "IMAP4.readonly"
directive: "exception"
module: "imaplib"
source_url: "https://docs.python.org/3/library/imaplib.html#imaplib.IMAP4.readonly"
license: "PSF"
updated: "2026-10-01"
---

# IMAP4.readonly

This exception is raised when a writable mailbox has its status changed by the
server.  This is a sub-class of `IMAP4.error`.  Some other client now has
write permission, and the mailbox will need to be re-opened to re-obtain write
permission.
