---
id: "python-en-function-http-cookiejar-defaultcookiepolicy-rfc2109_as_netscape"
language: "python"
lang: "en"
category: "function"
name: "DefaultCookiePolicy.rfc2109_as_netscape"
directive: "attribute"
module: "http.cookiejar"
source_url: "https://docs.python.org/3/library/http.cookiejar.html#http.cookiejar.DefaultCookiePolicy.rfc2109_as_netscape"
license: "PSF"
updated: "2026-10-01"
---

# DefaultCookiePolicy.rfc2109_as_netscape

If true, request that the `CookieJar` instance downgrade RFC 2109 cookies
(that is, cookies received in a `Set-Cookie` header with a version
cookie-attribute of 1) to Netscape cookies by setting the version attribute of
the `Cookie` instance to 0.  The default value is `None`, in which
case RFC 2109 cookies are downgraded if and only if RFC 2965 handling is turned
off.  Therefore, RFC 2109 cookies are downgraded by default.
