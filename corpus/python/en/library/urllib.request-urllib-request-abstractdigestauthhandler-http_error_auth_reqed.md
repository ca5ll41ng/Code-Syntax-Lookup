---
id: "python-en-function-urllib-request-abstractdigestauthhandler-http_error_auth_reqed"
language: "python"
lang: "en"
category: "function"
name: "AbstractDigestAuthHandler.http_error_auth_reqed"
signature: "AbstractDigestAuthHandler.http_error_auth_reqed(authreq, host, req, headers)"
directive: "method"
module: "urllib.request"
source_url: "https://docs.python.org/3/library/urllib.request.html#urllib.request.AbstractDigestAuthHandler.http_error_auth_reqed"
license: "PSF"
updated: "2026-10-01"
---

# AbstractDigestAuthHandler.http_error_auth_reqed

*authreq* should be the name of the header where the information about the realm
is included in the request, *host* should be the host to authenticate to, *req*
should be the (failed) `Request` object, and *headers* should be the
error headers.

*headers* must be a mapping-like object with case-insensitive lookup,
such as `email.message.Message` or `wsgiref.headers.Headers`.
