---
id: "python-en-function-imaplib-imap4-uid"
language: "python"
lang: "en"
category: "function"
name: "IMAP4.uid"
signature: "IMAP4.uid(command, arg[, ...], *, params=None)"
directive: "method"
module: "imaplib"
source_url: "https://docs.python.org/3/library/imaplib.html#imaplib.IMAP4.uid"
license: "PSF"
updated: "2026-10-01"
---

# IMAP4.uid

Execute command args with messages identified by UID, rather than message
number.  Returns response appropriate to command.  At least one argument must be
supplied; if none are provided, the server will return an error and an exception
will be raised.

If *params* is given, `?` placeholders in the `SEARCH`, `SORT` and
`THREAD` criteria or in the `FETCH` parts are substituted with the quoted
parameters (see `the placeholders`).

> *Changed in next*: Added the *params* parameter.
