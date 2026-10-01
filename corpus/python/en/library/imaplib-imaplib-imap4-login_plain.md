---
id: "python-en-function-imaplib-imap4-login_plain"
language: "python"
lang: "en"
category: "function"
name: "IMAP4.login_plain"
signature: "IMAP4.login_plain(user, password)"
directive: "method"
module: "imaplib"
source_url: "https://docs.python.org/3/library/imaplib.html#imaplib.IMAP4.login_plain"
license: "PSF"
updated: "2026-10-01"
---

# IMAP4.login_plain

Authenticate using the `PLAIN` SASL mechanism (RFC 4616).

This is a plaintext authentication mechanism that can be used instead
of `login` when UTF-8 support is required (see RFC 6855).
Since the credentials are only base64-encoded, not encrypted, this
method should only be used over a TLS-protected connection, such as
`IMAP4_SSL` or after `starttls`.

It will only work if the server supports the `PLAIN` mechanism,
which it need not advertise as `AUTH=PLAIN` in its `CAPABILITY`
response.

> *Added in next*
