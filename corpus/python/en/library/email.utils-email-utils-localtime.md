---
id: "python-en-function-email-utils-localtime"
language: "python"
lang: "en"
category: "function"
name: "localtime"
signature: "localtime(dt=None)"
directive: "function"
module: "email.utils"
source_url: "https://docs.python.org/3/library/email.utils.html#email.utils.localtime"
license: "PSF"
updated: "2026-10-01"
---

# localtime

Return local time as an aware datetime object.  If called without
arguments, return current time.  Otherwise *dt* argument should be a
`~datetime.datetime` instance, and it is converted to the local time
zone according to the system time zone database.  If *dt* is naive (that
is, `dt.tzinfo` is `None`), it is assumed to be in local time.

> *Added in 3.3*

deprecated-removed:: 3.12 3.14
