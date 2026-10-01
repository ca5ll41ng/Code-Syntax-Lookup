---
id: "python-en-function-urllib-request-httpredirecthandler-redirect_request"
language: "python"
lang: "en"
category: "function"
name: "HTTPRedirectHandler.redirect_request"
signature: "HTTPRedirectHandler.redirect_request(req, fp, code, msg, hdrs, newurl)"
directive: "method"
module: "urllib.request"
source_url: "https://docs.python.org/3/library/urllib.request.html#urllib.request.HTTPRedirectHandler.redirect_request"
license: "PSF"
updated: "2026-10-01"
---

# HTTPRedirectHandler.redirect_request

Return a `Request` or `None` in response to a redirect. This is called
by the default implementations of the `http_error_30\*` methods when a
redirection is received from the server.  If a redirection should take place,
return a new `Request` to allow `http_error_30\*` to perform the
redirect to *newurl*.  Otherwise, raise `~urllib.error.HTTPError` if
no other handler should try to handle this URL, or return `None` if you
can't but another handler might.

> **Note**
>
> The default implementation of this method does not strictly follow RFC 2616,
> which says that 301 and 302 responses to `POST` requests must not be
> automatically redirected without confirmation by the user.  In reality, browsers
> do allow automatic redirection of these responses, changing the POST to a
> `GET`, and the default implementation reproduces this behavior.
>
