---
id: "python-en-function-imaplib-imap4-login_cram_md5"
language: "python"
lang: "en"
category: "function"
name: "IMAP4.login_cram_md5"
signature: "IMAP4.login_cram_md5(user, password)"
directive: "method"
module: "imaplib"
source_url: "https://docs.python.org/3/library/imaplib.html#imaplib.IMAP4.login_cram_md5"
license: "PSF"
updated: "2026-10-01"
---

# IMAP4.login_cram_md5

Force use of `CRAM-MD5` authentication when identifying the client to protect
the password. It will only work if the server `CAPABILITY` response includes
the phrase `AUTH=CRAM-MD5`.

> *Changed in 3.15*: An :exc:`IMAP4.error` is raised if MD5 support is not available.
