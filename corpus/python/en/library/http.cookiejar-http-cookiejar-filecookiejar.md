---
id: "python-en-function-http-cookiejar-filecookiejar"
language: "python"
lang: "en"
category: "function"
name: "FileCookieJar"
signature: "FileCookieJar(filename=None, delayload=None, policy=None)"
directive: "class"
module: "http.cookiejar"
source_url: "https://docs.python.org/3/library/http.cookiejar.html#http.cookiejar.FileCookieJar"
license: "PSF"
updated: "2026-10-01"
---

# FileCookieJar

*policy* is an object implementing the `CookiePolicy` interface.  For the
other arguments, see the documentation for the corresponding attributes.

A `CookieJar` which can load cookies from, and perhaps save cookies to, a
file on disk.  Cookies are **NOT** loaded from the named file until either the
`load` or `revert` method is called.  Subclasses of this class are
documented in section `file-cookie-jar-classes`.

This should not be initialized directly – use its subclasses below instead.

> *Changed in 3.8*: The filename parameter supports a :term:`path-like object`.
