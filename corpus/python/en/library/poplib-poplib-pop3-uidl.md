---
id: "python-en-function-poplib-pop3-uidl"
language: "python"
lang: "en"
category: "function"
name: "POP3.uidl"
signature: "POP3.uidl(which=None)"
directive: "method"
module: "poplib"
source_url: "https://docs.python.org/3/library/poplib.html#poplib.POP3.uidl"
license: "PSF"
updated: "2026-10-01"
---

# POP3.uidl

Return message digest (unique id) list. If *which* is specified, result contains
the unique id for that message in the form `'response mesgnum uid`, otherwise
result is list `(response, ['mesgnum uid', ...], octets)`.
