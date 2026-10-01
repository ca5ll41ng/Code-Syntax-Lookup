---
id: "python-en-function-urllib-error-httperror"
language: "python"
lang: "en"
category: "function"
name: "HTTPError"
signature: "HTTPError(url, code, msg, hdrs, fp)"
directive: "exception"
module: "urllib.error"
source_url: "https://docs.python.org/3/library/urllib.error.html#urllib.error.HTTPError"
license: "PSF"
updated: "2026-10-01"
---

# HTTPError

Though being an exception (a subclass of `URLError`), an
`HTTPError` can also function as a non-exceptional file-like return
value (the same thing that `~urllib.request.urlopen` returns).  This
is useful when handling exotic HTTP errors, such as requests for
authentication.

attribute:: url

attribute:: code

attribute:: reason

attribute:: headers

attribute:: fp
