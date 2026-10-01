---
id: "python-en-function-urllib-request-abstractdigestauthhandler"
language: "python"
lang: "en"
category: "function"
name: "AbstractDigestAuthHandler"
signature: "AbstractDigestAuthHandler(password_mgr=None)"
directive: "class"
module: "urllib.request"
source_url: "https://docs.python.org/3/library/urllib.request.html#urllib.request.AbstractDigestAuthHandler"
license: "PSF"
updated: "2026-10-01"
---

# AbstractDigestAuthHandler

This is a mixin class that helps with HTTP authentication, both to the remote
host and to a proxy. *password_mgr*, if given, should be something that is
compatible with `HTTPPasswordMgr`; refer to section
`http-password-mgr` for information on the interface that must be
supported.

> *Changed in 3.14*: Added support for HTTP digest authentication algorithm ``SHA-256``.
