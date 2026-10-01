---
id: "python-en-function-time-localtime"
language: "python"
lang: "en"
category: "function"
name: "localtime"
signature: "localtime(seconds=None, /)"
directive: "function"
module: "time"
source_url: "https://docs.python.org/3/library/time.html#time.localtime"
license: "PSF"
updated: "2026-10-01"
---

# localtime

Like `gmtime` but converts to local time.
If *seconds* is not provided or `None`,
the current time as returned by `.time` is used.
The dst flag is set to `1` when DST applies to the given time.

`localtime` may raise `OverflowError`, if the timestamp is
outside the range of values supported by the platform C :c`localtime`
or :c`gmtime` functions, and `OSError` on :c`localtime` or
:c`gmtime` failure. It's common for this to be restricted to years
between 1970 and 2038.

> *Changed in 3.15*: Accepts any real number, not only integer or float.
