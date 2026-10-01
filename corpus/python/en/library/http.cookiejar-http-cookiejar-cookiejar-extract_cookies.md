---
id: "python-en-function-http-cookiejar-cookiejar-extract_cookies"
language: "python"
lang: "en"
category: "function"
name: "CookieJar.extract_cookies"
signature: "CookieJar.extract_cookies(response, request)"
directive: "method"
module: "http.cookiejar"
source_url: "https://docs.python.org/3/library/http.cookiejar.html#http.cookiejar.CookieJar.extract_cookies"
license: "PSF"
updated: "2026-10-01"
---

# CookieJar.extract_cookies

Extract cookies from HTTP *response* and store them in the `CookieJar`,
where allowed by policy.

The `CookieJar` will look for allowable `Set-Cookie` and
`Set-Cookie2` headers in the *response* argument, and store cookies
as appropriate (subject to the `CookiePolicy.set_ok` method's approval).

The *response* object (usually the result of a call to
`urllib.request.urlopen`, or similar) should support an
`~http.client.HTTPResponse.info` method, which returns an
`email.message.Message` instance.

The *request* object (usually a `urllib.request.Request` instance)
must support the method `~urllib.request.Request.get_full_url` and
the attributes `~urllib.request.Request.host`,
`~urllib.request.Request.unverifiable`
and `~urllib.request.Request.origin_req_host`,
as documented by `urllib.request`.  The request is used to set
default values for cookie-attributes as well as for checking that the
cookie is allowed to be set.

> *Changed in 3.3*: *request* object needs :attr:`~urllib.request.Request.origin_req_host` attribute. Dependency on a deprecated method :meth:`!get_origin_req_host` has been removed.
