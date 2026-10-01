---
id: "python-en-function-http-cookiejar-cookie-is_expired"
language: "python"
lang: "en"
category: "function"
name: "Cookie.is_expired"
signature: "Cookie.is_expired(now=None)"
directive: "method"
module: "http.cookiejar"
source_url: "https://docs.python.org/3/library/http.cookiejar.html#http.cookiejar.Cookie.is_expired"
license: "PSF"
updated: "2026-10-01"
---

# Cookie.is_expired

`True` if cookie has passed the time at which the server requested it should
expire.  If *now* is given (in seconds since the epoch), return whether the
cookie has expired at the specified time.
