---
id: "python-zh-function-http-cookiejar-cookiejar"
language: "python"
lang: "zh"
category: "function"
name: "CookieJar"
signature: "CookieJar(policy=None)"
directive: "class"
module: "http.cookiejar"
source_url: "https://docs.python.org/zh-cn/3/library/http.cookiejar.html#http.cookiejar.CookieJar"
license: "PSF"
updated: "2026-10-01"
---

# CookieJar

*policy* 是实现了 :class:`CookiePolicy` 接口的一个对象。

The `CookieJar` class stores HTTP cookies.  It extracts cookies from HTTP
requests, and returns them in HTTP responses. `CookieJar` instances
automatically expire contained cookies when necessary.  Subclasses are also
responsible for storing and retrieving cookies from a file or database.
