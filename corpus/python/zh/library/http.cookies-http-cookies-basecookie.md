---
id: "python-zh-function-http-cookies-basecookie"
language: "python"
lang: "zh"
category: "function"
name: "BaseCookie"
signature: "BaseCookie([input])"
directive: "class"
module: "http.cookies"
source_url: "https://docs.python.org/zh-cn/3/library/http.cookies.html#http.cookies.BaseCookie"
license: "PSF"
updated: "2026-10-01"
---

# BaseCookie

This class is a dictionary-like object whose keys are strings and whose values
are `Morsel` instances. Note that upon setting a key to a value, the
value is first converted to a `Morsel` containing the key and the value.

若给出 *input* ，将会传给 :meth:`load` 方法。
