---
id: "python-en-function-imaplib-imap4-authenticate"
language: "python"
lang: "en"
category: "function"
name: "IMAP4.authenticate"
signature: "IMAP4.authenticate(mechanism, authobject)"
directive: "method"
module: "imaplib"
source_url: "https://docs.python.org/3/library/imaplib.html#imaplib.IMAP4.authenticate"
license: "PSF"
updated: "2026-10-01"
---

# IMAP4.authenticate

Authenticate command --- requires response processing.

*mechanism* specifies which authentication mechanism is to be used - it should
appear in the instance variable `capabilities` in the form `AUTH=mechanism`.

*authobject* must be a callable object::

   data = authobject(response)

It will be called to process server continuation responses; the *response*
argument it is passed will be `bytes`.  It should return `bytes` *data*
that will be base64 encoded and sent to the server.  It should return
`None` if the client abort response `*` should be sent instead.

> *Changed in 3.5*: string usernames and passwords are now encoded to ``utf-8`` instead of being limited to ASCII.
