---
id: "python-en-function-imaplib-imap4-id"
language: "python"
lang: "en"
category: "function"
name: "IMAP4.id"
signature: "IMAP4.id(fields=None)"
directive: "method"
module: "imaplib"
source_url: "https://docs.python.org/3/library/imaplib.html#imaplib.IMAP4.id"
license: "PSF"
updated: "2026-10-01"
---

# IMAP4.id

Send client identification information to the server
and return the identification information sent back by the server
(the `ID` command, defined in RFC 2971).
*fields* is a mapping of field names to values
(for example, `{'name': 'myclient', 'version': '1.0'}`);
a value can be `None`.
The server must support the `ID` capability.

> *Added in next*
