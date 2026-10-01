---
id: "python-en-function-http-cookies-basecookie-value_encode"
language: "python"
lang: "en"
category: "function"
name: "BaseCookie.value_encode"
signature: "BaseCookie.value_encode(val)"
directive: "method"
module: "http.cookies"
source_url: "https://docs.python.org/3/library/http.cookies.html#http.cookies.BaseCookie.value_encode"
license: "PSF"
updated: "2026-10-01"
---

# BaseCookie.value_encode

Return a tuple `(real_value, coded_value)`. *val* can be any type, but
`coded_value` will always be converted to a string.
This method does no encoding in `BaseCookie` --- it exists so it can
be overridden.

In general, it should be the case that `value_encode` and
`value_decode` are inverses on the range of *value_decode*.
