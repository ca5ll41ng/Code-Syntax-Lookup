---
id: "python-en-function-http-cookies-basecookie-load"
language: "python"
lang: "en"
category: "function"
name: "BaseCookie.load"
signature: "BaseCookie.load(rawdata)"
directive: "method"
module: "http.cookies"
source_url: "https://docs.python.org/3/library/http.cookies.html#http.cookies.BaseCookie.load"
license: "PSF"
updated: "2026-10-01"
---

# BaseCookie.load

If *rawdata* is a string, parse it as an `HTTP_COOKIE` and add the values
found there as `Morsel`\ s. If it is a dictionary, it is equivalent to::

   for k, v in rawdata.items():
       cookie[k] = v
