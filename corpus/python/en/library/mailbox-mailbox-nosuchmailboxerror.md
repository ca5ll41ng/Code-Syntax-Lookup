---
id: "python-en-function-mailbox-nosuchmailboxerror"
language: "python"
lang: "en"
category: "function"
name: "NoSuchMailboxError"
signature: "NoSuchMailboxError()"
directive: "exception"
module: "mailbox"
source_url: "https://docs.python.org/3/library/mailbox.html#mailbox.NoSuchMailboxError"
license: "PSF"
updated: "2026-10-01"
---

# NoSuchMailboxError

Raised when a mailbox is expected but is not found, such as when instantiating a
`Mailbox` subclass with a path that does not exist (and with the *create*
parameter set to `False`), or when opening a folder that does not exist.
