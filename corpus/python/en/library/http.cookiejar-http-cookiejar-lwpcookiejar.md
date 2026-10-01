---
id: "python-en-function-http-cookiejar-lwpcookiejar"
language: "python"
lang: "en"
category: "function"
name: "LWPCookieJar"
signature: "LWPCookieJar(filename=None, delayload=None, policy=None)"
directive: "class"
module: "http.cookiejar"
source_url: "https://docs.python.org/3/library/http.cookiejar.html#http.cookiejar.LWPCookieJar"
license: "PSF"
updated: "2026-10-01"
---

# LWPCookieJar

A `FileCookieJar` that can load from and save cookies to disk in format
compatible with the libwww-perl library's `Set-Cookie3` file format.  This is
convenient if you want to store cookies in a human-readable file.

> *Changed in 3.8*: The filename parameter supports a :term:`path-like object`.
