---
id: "python-en-function-http-cookiejar-filecookiejar-revert"
language: "python"
lang: "en"
category: "function"
name: "FileCookieJar.revert"
signature: "FileCookieJar.revert(filename=None, ignore_discard=False, ignore_expires=False)"
directive: "method"
module: "http.cookiejar"
source_url: "https://docs.python.org/3/library/http.cookiejar.html#http.cookiejar.FileCookieJar.revert"
license: "PSF"
updated: "2026-10-01"
---

# FileCookieJar.revert

Clear all cookies and reload cookies from a saved file.

`revert` can raise the same exceptions as `load`. If there is a
failure, the object's state will not be altered.
