---
id: "python-zh-function-http-cookiejar-cookiejar-clear"
language: "python"
lang: "zh"
category: "function"
name: "CookieJar.clear"
signature: "CookieJar.clear([domain[, path[, name]]])"
directive: "method"
module: "http.cookiejar"
source_url: "https://docs.python.org/zh-cn/3/library/http.cookiejar.html#http.cookiejar.CookieJar.clear"
license: "PSF"
updated: "2026-10-01"
---

# CookieJar.clear

清除一些 cookie。

If invoked without arguments, clear all cookies.  If given a single argument,
only cookies belonging to that *domain* will be removed. If given two arguments,
cookies belonging to the specified *domain* and URL *path* are removed.  If
given three arguments, then the cookie with the specified *domain*, *path* and
*name* is removed.

如果不存在匹配的 cookie，则会引发 :exc:`KeyError`。
