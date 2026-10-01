---
id: "python-en-function-http-cookiejar-filecookiejar-load"
language: "python"
lang: "en"
category: "function"
name: "FileCookieJar.load"
signature: "FileCookieJar.load(filename=None, ignore_discard=False, ignore_expires=False)"
directive: "method"
module: "http.cookiejar"
source_url: "https://docs.python.org/3/library/http.cookiejar.html#http.cookiejar.FileCookieJar.load"
license: "PSF"
updated: "2026-10-01"
---

# FileCookieJar.load

Load cookies from a file.

Old cookies are kept unless overwritten by newly loaded ones.

Arguments are as for `save`.

The named file must be in the format understood by the class, or
`LoadError` will be raised.  Also, `OSError` may be raised, for
example if the file does not exist.

> *Changed in 3.3*: :exc:`IOError` used to be raised, it is now an alias of :exc:`OSError`.
