---
id: "python-en-function-urllib-request-abstractbasicauthhandler-http_error_auth_reqed"
language: "python"
lang: "en"
category: "function"
name: "AbstractBasicAuthHandler.http_error_auth_reqed"
signature: "AbstractBasicAuthHandler.http_error_auth_reqed(authreq, host, req, headers)"
directive: "method"
module: "urllib.request"
source_url: "https://docs.python.org/3/library/urllib.request.html#urllib.request.AbstractBasicAuthHandler.http_error_auth_reqed"
license: "PSF"
updated: "2026-10-01"
---

# AbstractBasicAuthHandler.http_error_auth_reqed

Handle an authentication request by getting a user/password pair, and re-trying
the request.  *authreq* should be the name of the header where the information
about the realm is included in the request, *host* specifies the URL and path to
authenticate for, *req* should be the (failed) `Request` object, and
*headers* should be the error headers.

*headers* must be a mapping-like object with case-insensitive lookup
that implements the `get_all()` method,
such as `email.message.Message` or `wsgiref.headers.Headers`.

*host* is either an authority (e.g. `"python.org"`) or a URL containing an
authority component (e.g. `"https://python.org/"`). In either case, the
authority must not contain a userinfo component (so, `"python.org"` and
`"python.org:80"` are fine, `"joe:password@python.org"` is not).
