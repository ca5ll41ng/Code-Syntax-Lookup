---
id: "python-en-function-email-utils-parsedate_tz"
language: "python"
lang: "en"
category: "function"
name: "parsedate_tz"
signature: "parsedate_tz(date)"
directive: "function"
module: "email.utils"
source_url: "https://docs.python.org/3/library/email.utils.html#email.utils.parsedate_tz"
license: "PSF"
updated: "2026-10-01"
---

# parsedate_tz

Performs the same function as `parsedate`, but returns either `None` or
a 10-tuple; the first 9 elements make up a tuple that can be passed directly to
`time.mktime`, and the tenth is the offset of the date's timezone from UTC
(which is the official term for Greenwich Mean Time) [#]_.  If the input string
has no timezone, the last element of the tuple returned is `0`, which represents
UTC. Note that indexes 6, 7, and 8 of the result tuple are not usable.
