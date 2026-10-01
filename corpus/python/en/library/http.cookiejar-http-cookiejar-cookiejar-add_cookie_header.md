---
id: "python-en-function-http-cookiejar-cookiejar-add_cookie_header"
language: "python"
lang: "en"
category: "function"
name: "CookieJar.add_cookie_header"
signature: "CookieJar.add_cookie_header(request)"
directive: "method"
module: "http.cookiejar"
source_url: "https://docs.python.org/3/library/http.cookiejar.html#http.cookiejar.CookieJar.add_cookie_header"
license: "PSF"
updated: "2026-10-01"
---

# CookieJar.add_cookie_header

Add correct `Cookie` header to *request*.

If policy allows (that is, the `~CookiePolicy.rfc2965` and
`~CookiePolicy.hide_cookie2` attributes of
the `CookieJar`'s `CookiePolicy` instance are true and false
respectively), the `Cookie2` header is also added when appropriate.

The *request* object (usually a `urllib.request.Request` instance)
must support the methods `~urllib.request.Request.get_full_url`,
`~urllib.request.Request.has_header`,
`~urllib.request.Request.get_header`,
`~urllib.request.Request.header_items`,
`~urllib.request.Request.add_unredirected_header`
and the attributes `~urllib.request.Request.host`,
`~urllib.request.Request.type`, `~urllib.request.Request.unverifiable`
and `~urllib.request.Request.origin_req_host` as documented by
`urllib.request`.

> *Changed in 3.3*: *request* object needs :attr:`~urllib.request.Request.origin_req_host` attribute. Dependency on a deprecated method :meth:`!get_origin_req_host` has been removed.
