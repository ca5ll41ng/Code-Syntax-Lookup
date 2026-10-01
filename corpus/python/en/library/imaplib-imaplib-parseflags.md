---
id: "python-en-function-imaplib-parseflags"
language: "python"
lang: "en"
category: "function"
name: "ParseFlags"
signature: "ParseFlags(resp)"
directive: "function"
module: "imaplib"
source_url: "https://docs.python.org/3/library/imaplib.html#imaplib.ParseFlags"
license: "PSF"
updated: "2026-10-01"
---

# ParseFlags

Converts a `bytes-like object` containing an IMAP4 `FLAGS` response
to a tuple of individual flags as `bytes`.  The return value is an
empty tuple if the input has wrong format.
