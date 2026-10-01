---
id: "python-en-function-email-utils-mktime_tz"
language: "python"
lang: "en"
category: "function"
name: "mktime_tz"
signature: "mktime_tz(tuple)"
directive: "function"
module: "email.utils"
source_url: "https://docs.python.org/3/library/email.utils.html#email.utils.mktime_tz"
license: "PSF"
updated: "2026-10-01"
---

# mktime_tz

Turn a 10-tuple as returned by `parsedate_tz` into a UTC
timestamp (seconds since the Epoch).  If the timezone item in the
tuple is `None`, assume local time.
