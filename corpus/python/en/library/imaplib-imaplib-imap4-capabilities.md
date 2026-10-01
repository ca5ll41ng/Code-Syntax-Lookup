---
id: "python-en-function-imaplib-imap4-capabilities"
language: "python"
lang: "en"
category: "function"
name: "IMAP4.capabilities"
directive: "attribute"
module: "imaplib"
source_url: "https://docs.python.org/3/library/imaplib.html#imaplib.IMAP4.capabilities"
license: "PSF"
updated: "2026-10-01"
---

# IMAP4.capabilities

A tuple of the capabilities advertised by the server, in upper case.

It is set when the connection is established,
and refreshed after a successful `~IMAP4.login`,
`~IMAP4.authenticate` or `~IMAP4.starttls`,
because the server can advertise different capabilities
in different connection states.

> *Changed in 3.14.7*: Refreshed after :meth:`~IMAP4.login` and :meth:`~IMAP4.authenticate`.
