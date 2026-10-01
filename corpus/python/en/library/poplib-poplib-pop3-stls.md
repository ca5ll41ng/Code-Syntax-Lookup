---
id: "python-en-function-poplib-pop3-stls"
language: "python"
lang: "en"
category: "function"
name: "POP3.stls"
signature: "POP3.stls(context=None)"
directive: "method"
module: "poplib"
source_url: "https://docs.python.org/3/library/poplib.html#poplib.POP3.stls"
license: "PSF"
updated: "2026-10-01"
---

# POP3.stls

Start a TLS session on the active connection as specified in RFC 2595.
This is only allowed before user authentication

*context* parameter is a `ssl.SSLContext` object which allows
bundling SSL configuration options, certificates and private keys into
a single (potentially long-lived) structure.  Please read `ssl-security`
for best practices.

This method supports hostname checking via
`ssl.SSLContext.check_hostname` and *Server Name Indication* (see
`ssl.HAS_SNI`).

> *Added in 3.4*
