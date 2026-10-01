---
id: "python-en-function-http-cookiejar-cookie-rfc2109"
language: "python"
lang: "en"
category: "function"
name: "Cookie.rfc2109"
directive: "attribute"
module: "http.cookiejar"
source_url: "https://docs.python.org/3/library/http.cookiejar.html#http.cookiejar.Cookie.rfc2109"
license: "PSF"
updated: "2026-10-01"
---

# Cookie.rfc2109

`True` if this cookie was received as an RFC 2109 cookie (that is, the cookie
arrived in a `Set-Cookie` header, and the value of the Version
cookie-attribute in that header was 1).  This attribute is provided because
`http.cookiejar` may 'downgrade' RFC 2109 cookies to Netscape cookies, in
which case `version` is 0.
