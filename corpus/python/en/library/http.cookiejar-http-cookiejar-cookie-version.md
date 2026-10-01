---
id: "python-en-function-http-cookiejar-cookie-version"
language: "python"
lang: "en"
category: "function"
name: "Cookie.version"
directive: "attribute"
module: "http.cookiejar"
source_url: "https://docs.python.org/3/library/http.cookiejar.html#http.cookiejar.Cookie.version"
license: "PSF"
updated: "2026-10-01"
---

# Cookie.version

Integer or `None`.  Netscape cookies have `version` 0. RFC 2965 and
RFC 2109 cookies have a `version` cookie-attribute of 1.  However, note that
`http.cookiejar` may 'downgrade' RFC 2109 cookies to Netscape cookies, in which
case `version` is 0.
