---
id: "python-en-function-http-cookiejar-cookiejar-clear_session_cookies"
language: "python"
lang: "en"
category: "function"
name: "CookieJar.clear_session_cookies"
signature: "CookieJar.clear_session_cookies()"
directive: "method"
module: "http.cookiejar"
source_url: "https://docs.python.org/3/library/http.cookiejar.html#http.cookiejar.CookieJar.clear_session_cookies"
license: "PSF"
updated: "2026-10-01"
---

# CookieJar.clear_session_cookies

Discard all session cookies.

Discards all contained cookies that have a true `~Cookie.discard` attribute
(usually because they had either no `max-age` or `expires` cookie-attribute,
or an explicit `discard` cookie-attribute).  For interactive browsers, the end
of a session usually corresponds to closing the browser window.

Note that the `~FileCookieJar.save` method won't save session cookies
anyway, unless you ask otherwise by passing a true *ignore_discard* argument.
