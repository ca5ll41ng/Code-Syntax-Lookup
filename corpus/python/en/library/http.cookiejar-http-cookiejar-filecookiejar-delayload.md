---
id: "python-en-function-http-cookiejar-filecookiejar-delayload"
language: "python"
lang: "en"
category: "function"
name: "FileCookieJar.delayload"
directive: "attribute"
module: "http.cookiejar"
source_url: "https://docs.python.org/3/library/http.cookiejar.html#http.cookiejar.FileCookieJar.delayload"
license: "PSF"
updated: "2026-10-01"
---

# FileCookieJar.delayload

If true, load cookies lazily from disk.  This attribute should not be assigned
to.  This is only a hint, since this only affects performance, not behaviour
(unless the cookies on disk are changing). A `CookieJar` object may
ignore it.  None of the `FileCookieJar` classes included in the standard
library lazily loads cookies.
