---
id: "python-en-function-imaplib-internaldate2tuple"
language: "python"
lang: "en"
category: "function"
name: "Internaldate2tuple"
signature: "Internaldate2tuple(resp)"
directive: "function"
module: "imaplib"
source_url: "https://docs.python.org/3/library/imaplib.html#imaplib.Internaldate2tuple"
license: "PSF"
updated: "2026-10-01"
---

# Internaldate2tuple

Parse a `bytes-like object` containing an IMAP4 `INTERNALDATE`
response and return the corresponding local time.  The return value is a
`time.struct_time` tuple or `None` if the input has wrong format.
