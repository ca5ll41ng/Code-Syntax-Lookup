---
id: "python-en-function-http-cookiejar-loaderror"
language: "python"
lang: "en"
category: "function"
name: "LoadError"
directive: "exception"
module: "http.cookiejar"
source_url: "https://docs.python.org/3/library/http.cookiejar.html#http.cookiejar.LoadError"
license: "PSF"
updated: "2026-10-01"
---

# LoadError

Instances of `FileCookieJar` raise this exception on failure to load
cookies from a file.  `LoadError` is a subclass of `OSError`.

> *Changed in 3.3*: :exc:`LoadError` used to be a subtype of :exc:`IOError`, which is now an alias of :exc:`OSError`.
