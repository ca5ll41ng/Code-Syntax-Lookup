---
id: "python-en-function-http-cookies-basecookie"
language: "python"
lang: "en"
category: "function"
name: "BaseCookie"
signature: "BaseCookie([input])"
directive: "class"
module: "http.cookies"
source_url: "https://docs.python.org/3/library/http.cookies.html#http.cookies.BaseCookie"
license: "PSF"
updated: "2026-10-01"
---

# BaseCookie

This class is a dictionary-like object whose keys are strings and whose values
are `Morsel` instances. Note that upon setting a key to a value, the
value is first converted to a `Morsel` containing the key and the value.

If *input* is given, it is passed to the `load` method.
