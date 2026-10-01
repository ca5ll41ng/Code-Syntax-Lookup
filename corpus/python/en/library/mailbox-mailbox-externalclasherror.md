---
id: "python-en-function-mailbox-externalclasherror"
language: "python"
lang: "en"
category: "function"
name: "ExternalClashError"
signature: "ExternalClashError()"
directive: "exception"
module: "mailbox"
source_url: "https://docs.python.org/3/library/mailbox.html#mailbox.ExternalClashError"
license: "PSF"
updated: "2026-10-01"
---

# ExternalClashError

Raised when some mailbox-related condition beyond the control of the program
causes it to be unable to proceed, such as when failing to acquire a lock that
another program already holds, or when a uniquely generated file name
already exists.
