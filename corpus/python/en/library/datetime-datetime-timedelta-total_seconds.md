---
id: "python-en-function-datetime-timedelta-total_seconds"
language: "python"
lang: "en"
category: "function"
name: "timedelta.total_seconds"
signature: "timedelta.total_seconds()"
directive: "method"
module: "datetime"
source_url: "https://docs.python.org/3/library/datetime.html#datetime.timedelta.total_seconds"
license: "PSF"
updated: "2026-10-01"
---

# timedelta.total_seconds

Return the total number of seconds contained in the duration. Equivalent to
`td / timedelta(seconds=1)`. For interval units other than seconds, use the
division form directly (for example, `td / timedelta(microseconds=1)`).

Note that for very large time intervals (greater than 270 years on
most platforms) this method will lose microsecond accuracy.

> *Added in 3.2*
