---
id: "python-en-function-http-cookies-simplecookie"
language: "python"
lang: "en"
category: "function"
name: "SimpleCookie"
signature: "SimpleCookie([input])"
directive: "class"
module: "http.cookies"
source_url: "https://docs.python.org/3/library/http.cookies.html#http.cookies.SimpleCookie"
license: "PSF"
updated: "2026-10-01"
---

# SimpleCookie

This class derives from `BaseCookie` and overrides `~BaseCookie.value_decode`
and `~BaseCookie.value_encode`. `SimpleCookie` supports
strings as cookie values. When setting the value, `SimpleCookie`
calls the builtin `str` to convert
the value to a string. Values received from HTTP are kept as strings.
